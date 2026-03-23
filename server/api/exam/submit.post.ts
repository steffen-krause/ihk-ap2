import { db, schema } from '~/server/db'
import { eq } from 'drizzle-orm'

interface ExamSubmitBody {
  sessionId: number
  answers: Array<{
    questionId: number
    isCorrect: boolean
    quality: number
    givenAnswer?: any
    responseTimeMs?: number
  }>
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ExamSubmitBody>(event)
  if (!body.sessionId || !body.answers) {
    throw createError({ statusCode: 400, message: 'Missing sessionId or answers' })
  }

  const [session] = await db
    .select()
    .from(schema.sessions)
    .where(eq(schema.sessions.id, body.sessionId))
    .limit(1)

  if (!session) throw createError({ statusCode: 404, message: 'Session not found' })

  // Save all answers
  const correctCount = body.answers.filter((a) => a.isCorrect).length
  const totalXp = body.answers.reduce((sum, a) => sum + (a.isCorrect ? 10 : 0), 0)

  for (const ans of body.answers) {
    await db.insert(schema.answers).values({
      questionId: ans.questionId,
      givenAnswer: ans.givenAnswer ?? null,
      isCorrect: ans.isCorrect,
      quality: ans.quality,
      responseTimeMs: ans.responseTimeMs ?? null,
      xpEarned: ans.isCorrect ? 10 : 0,
      sessionId: body.sessionId,
    })
  }

  // Update session
  const scorePercent =
    body.answers.length > 0 ? Math.round((correctCount / body.answers.length) * 100) : 0

  await db
    .update(schema.sessions)
    .set({
      endedAt: new Date(),
      correctAnswers: correctCount,
      xpEarned: totalXp,
      scorePercent,
    })
    .where(eq(schema.sessions.id, body.sessionId))

  // Update user stats
  const [stats] = await db.select().from(schema.userStats).limit(1)
  if (stats) {
    await db
      .update(schema.userStats)
      .set({
        totalXp: stats.totalXp + totalXp,
        totalSessions: stats.totalSessions + 1,
        totalQuestionsAnswered: stats.totalQuestionsAnswered + body.answers.length,
        totalCorrect: stats.totalCorrect + correctCount,
      })
      .where(eq(schema.userStats.id, stats.id))
  }

  return {
    scorePercent,
    correctCount,
    totalQuestions: body.answers.length,
    passed: scorePercent >= 50,
    xpEarned: totalXp,
  }
})
