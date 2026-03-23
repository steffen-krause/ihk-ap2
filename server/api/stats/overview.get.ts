import { db, schema } from '~/server/db'
import { eq, desc, sql } from 'drizzle-orm'
import { levelProgress } from '~/server/utils/gamification'
import { calculateReadinessScore } from '~/server/utils/performance'

export default defineEventHandler(async () => {
  // User stats
  let [stats] = await db.select().from(schema.userStats).limit(1)
  if (!stats) {
    ;[stats] = await db.insert(schema.userStats).values({}).returning()
  }

  const progress = levelProgress(stats.totalXp)

  // Due reviews count
  const today = new Date().toISOString().split('T')[0]
  const [dueCount] = await db
    .select({ count: sql<number>`count(*)` })
    .from(schema.questionReviews)
    .where(sql`${schema.questionReviews.nextReviewDate} <= ${today}`)

  // Topic performances for readiness
  const perfs = await db
    .select({
      priority: schema.topics.priority,
      masteryLevel: schema.topicPerformance.masteryLevel,
    })
    .from(schema.topicPerformance)
    .innerJoin(schema.topics, eq(schema.topicPerformance.topicId, schema.topics.id))

  const readinessScore = calculateReadinessScore(perfs)

  // Recent sessions
  const recentSessions = await db
    .select()
    .from(schema.sessions)
    .orderBy(desc(schema.sessions.startedAt))
    .limit(5)

  // Today's activity
  const [todayActivity] = await db
    .select()
    .from(schema.dailyActivity)
    .where(eq(schema.dailyActivity.date, today))
    .limit(1)

  // Weakest topic (lowest accuracy with > 5 attempts)
  const weakest = await db
    .select({
      topicName: schema.topics.name,
      topicSlug: schema.topics.slug,
      accuracyRate: schema.topicPerformance.accuracyRate,
      totalAttempts: schema.topicPerformance.totalAttempts,
    })
    .from(schema.topicPerformance)
    .innerJoin(schema.topics, eq(schema.topicPerformance.topicId, schema.topics.id))
    .where(sql`${schema.topicPerformance.totalAttempts} > 5`)
    .orderBy(schema.topicPerformance.accuracyRate)
    .limit(1)

  return {
    xp: stats.totalXp,
    level: progress.level,
    levelProgress: progress.progress,
    xpInLevel: progress.xpInLevel,
    xpNeeded: progress.xpNeeded,
    streak: stats.currentStreak,
    longestStreak: stats.longestStreak,
    totalQuestionsAnswered: stats.totalQuestionsAnswered,
    totalCorrect: stats.totalCorrect,
    overallAccuracy:
      stats.totalQuestionsAnswered > 0
        ? Math.round((stats.totalCorrect / stats.totalQuestionsAnswered) * 100)
        : 0,
    dueReviews: Number(dueCount?.count ?? 0),
    readinessScore,
    recentSessions,
    todayActivity: todayActivity ?? null,
    weakestTopic: weakest[0] ?? null,
  }
})
