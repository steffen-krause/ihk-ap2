import { db, schema } from '~/server/db'
import { eq, sql, desc } from 'drizzle-orm'
import { calculateSM2 } from '~/server/utils/sm2'
import { calculateXP, calculateLevel, updateStreak } from '~/server/utils/gamification'
import { calculateMastery, calculateTrend, checkNeedsMoreQuestions } from '~/server/utils/performance'

interface AnswerBody {
  questionId: number
  isCorrect: boolean
  quality: number // 0-5
  givenAnswer?: any
  responseTimeMs?: number
  sessionId?: number
}

export default defineEventHandler(async (event) => {
  const body = await readBody<AnswerBody>(event)
  if (!body.questionId || body.quality === undefined) {
    throw createError({ statusCode: 400, message: 'Missing questionId or quality' })
  }

  const quality = Math.max(0, Math.min(5, body.quality))
  const isCorrect = body.isCorrect ?? quality >= 3

  // Get current user stats
  let [stats] = await db.select().from(schema.userStats).limit(1)
  if (!stats) {
    ;[stats] = await db.insert(schema.userStats).values({}).returning()
  }

  // Calculate XP
  const [question] = await db
    .select()
    .from(schema.questions)
    .where(eq(schema.questions.id, body.questionId))
    .limit(1)
  if (!question) throw createError({ statusCode: 404, message: 'Question not found' })

  const xpEarned = calculateXP(question.difficulty, isCorrect, stats.currentStreak)

  // Update SM-2 review
  const [existingReview] = await db
    .select()
    .from(schema.questionReviews)
    .where(eq(schema.questionReviews.questionId, body.questionId))
    .limit(1)

  const sm2Input = {
    easinessFactor: existingReview?.easinessFactor ?? 2.5,
    interval: existingReview?.interval ?? 1,
    repetitions: existingReview?.repetitions ?? 0,
    quality,
  }
  const sm2Result = calculateSM2(sm2Input)

  if (existingReview) {
    await db
      .update(schema.questionReviews)
      .set({
        easinessFactor: sm2Result.easinessFactor,
        interval: sm2Result.interval,
        repetitions: sm2Result.repetitions,
        nextReviewDate: sm2Result.nextReviewDate,
        lastReviewedAt: new Date(),
        lastQuality: quality,
      })
      .where(eq(schema.questionReviews.id, existingReview.id))
  } else {
    await db.insert(schema.questionReviews).values({
      questionId: body.questionId,
      easinessFactor: sm2Result.easinessFactor,
      interval: sm2Result.interval,
      repetitions: sm2Result.repetitions,
      nextReviewDate: sm2Result.nextReviewDate,
      lastReviewedAt: new Date(),
      lastQuality: quality,
    })
  }

  // Save answer
  await db.insert(schema.answers).values({
    questionId: body.questionId,
    givenAnswer: body.givenAnswer ?? null,
    isCorrect,
    quality,
    responseTimeMs: body.responseTimeMs ?? null,
    xpEarned,
    sessionId: body.sessionId ?? null,
  })

  // Update streak
  const { newStreak, isNewDay } = updateStreak(stats.lastActiveDate, stats.currentStreak)
  const newTotalXp = stats.totalXp + xpEarned
  const newLevel = calculateLevel(newTotalXp)
  const leveledUp = newLevel > stats.level

  await db
    .update(schema.userStats)
    .set({
      totalXp: newTotalXp,
      level: newLevel,
      currentStreak: newStreak,
      longestStreak: Math.max(stats.longestStreak, newStreak),
      lastActiveDate: new Date().toISOString().split('T')[0],
      totalQuestionsAnswered: stats.totalQuestionsAnswered + 1,
      totalCorrect: stats.totalCorrect + (isCorrect ? 1 : 0),
    })
    .where(eq(schema.userStats.id, stats.id))

  // Update daily activity
  const today = new Date().toISOString().split('T')[0]
  const [existingDay] = await db
    .select()
    .from(schema.dailyActivity)
    .where(eq(schema.dailyActivity.date, today))
    .limit(1)

  if (existingDay) {
    await db
      .update(schema.dailyActivity)
      .set({
        questionsAnswered: existingDay.questionsAnswered + 1,
        correctAnswers: existingDay.correctAnswers + (isCorrect ? 1 : 0),
        xpEarned: existingDay.xpEarned + xpEarned,
      })
      .where(eq(schema.dailyActivity.id, existingDay.id))
  } else {
    await db.insert(schema.dailyActivity).values({
      date: today,
      questionsAnswered: 1,
      correctAnswers: isCorrect ? 1 : 0,
      xpEarned,
    })
  }

  // Update topic performance
  const [subtopic] = await db
    .select()
    .from(schema.subtopics)
    .where(eq(schema.subtopics.id, question.subtopicId))
    .limit(1)

  if (subtopic) {
    const [perf] = await db
      .select()
      .from(schema.topicPerformance)
      .where(eq(schema.topicPerformance.topicId, subtopic.topicId))
      .limit(1)

    if (perf) {
      const newTotal = perf.totalAttempts + 1
      const newCorrect = perf.correctAttempts + (isCorrect ? 1 : 0)
      const newAccuracy = newCorrect / newTotal
      const newMastery = calculateMastery(newTotal, newAccuracy)

      // Calculate avg response time
      const newAvg = body.responseTimeMs
        ? perf.avgResponseTimeMs
          ? Math.round((perf.avgResponseTimeMs * perf.totalAttempts + body.responseTimeMs) / newTotal)
          : body.responseTimeMs
        : perf.avgResponseTimeMs

      // Check trend (simplified - using overall rate change)
      const trend = calculateTrend(
        isCorrect ? 1 : 0,
        1,
        perf.correctAttempts,
        perf.totalAttempts
      )

      // Count total questions and avg times answered
      const [qCount] = await db
        .select({ count: sql<number>`count(*)` })
        .from(schema.questions)
        .innerJoin(schema.subtopics, eq(schema.questions.subtopicId, schema.subtopics.id))
        .where(eq(schema.subtopics.topicId, subtopic.topicId))

      const [ansCount] = await db
        .select({ count: sql<number>`count(*)` })
        .from(schema.answers)
        .innerJoin(schema.questions, eq(schema.answers.questionId, schema.questions.id))
        .innerJoin(schema.subtopics, eq(schema.questions.subtopicId, schema.subtopics.id))
        .where(eq(schema.subtopics.topicId, subtopic.topicId))

      const totalQuestions = Number(qCount?.count ?? 0)
      const totalAnswers = Number(ansCount?.count ?? 0)
      const avgTimesAnswered = totalQuestions > 0 ? totalAnswers / totalQuestions : 0

      await db
        .update(schema.topicPerformance)
        .set({
          totalAttempts: newTotal,
          correctAttempts: newCorrect,
          accuracyRate: Math.round(newAccuracy * 100) / 100,
          avgResponseTimeMs: newAvg,
          masteryLevel: newMastery,
          trend: perf.totalAttempts > 10 ? trend : 'stable',
          lastPracticedAt: new Date(),
          needsMoreQuestions: checkNeedsMoreQuestions(newAccuracy, newTotal, totalQuestions, avgTimesAnswered),
        })
        .where(eq(schema.topicPerformance.id, perf.id))
    }
  }

  return {
    xpEarned,
    totalXp: newTotalXp,
    level: newLevel,
    leveledUp,
    streak: newStreak,
    isCorrect,
    sm2: sm2Result,
  }
})
