import { db, schema } from '~/server/db'
import { eq, asc } from 'drizzle-orm'

export default defineEventHandler(async () => {
  const allTopics = await db
    .select()
    .from(schema.topics)
    .orderBy(asc(schema.topics.priority), asc(schema.topics.sortOrder))

  const performances = await db.select().from(schema.topicPerformance)
  const perfMap = new Map(performances.map((p) => [p.topicId, p]))

  return allTopics.map((t) => {
    const perf = perfMap.get(t.id)
    return {
      ...t,
      performance: perf
        ? {
            totalAttempts: perf.totalAttempts,
            correctAttempts: perf.correctAttempts,
            accuracyRate: perf.accuracyRate,
            masteryLevel: perf.masteryLevel,
            trend: perf.trend,
            needsMoreQuestions: perf.needsMoreQuestions,
            lastPracticedAt: perf.lastPracticedAt,
          }
        : null,
    }
  })
})
