import { db, schema } from '~/server/db'
import { eq, lte, asc, sql, and, inArray } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const topicSlug = query.topic as string | undefined
  const limit = Math.min(parseInt(query.limit as string) || 10, 30)

  const today = new Date().toISOString().split('T')[0]

  // Build the base query — get questions due for review
  let topicFilter: number | undefined
  if (topicSlug) {
    const [topic] = await db
      .select({ id: schema.topics.id })
      .from(schema.topics)
      .where(eq(schema.topics.slug, topicSlug))
      .limit(1)
    if (topic) topicFilter = topic.id
  }

  // Get due reviews
  const dueReviews = await db
    .select({
      questionId: schema.questionReviews.questionId,
      easinessFactor: schema.questionReviews.easinessFactor,
      interval: schema.questionReviews.interval,
      repetitions: schema.questionReviews.repetitions,
    })
    .from(schema.questionReviews)
    .where(lte(schema.questionReviews.nextReviewDate, today))
    .orderBy(asc(schema.questionReviews.nextReviewDate))
    .limit(limit * 2) // fetch extra to filter by topic

  const dueQuestionIds = dueReviews.map((r) => r.questionId)

  let questionsResult: Array<typeof schema.questions.$inferSelect> = []

  if (dueQuestionIds.length > 0) {
    const conditions = [inArray(schema.questions.id, dueQuestionIds)]
    if (topicFilter) {
      const subtopicIds = await db
        .select({ id: schema.subtopics.id })
        .from(schema.subtopics)
        .where(eq(schema.subtopics.topicId, topicFilter))
      if (subtopicIds.length > 0) {
        conditions.push(
          inArray(
            schema.questions.subtopicId,
            subtopicIds.map((s) => s.id)
          )
        )
      }
    }
    questionsResult = await db
      .select()
      .from(schema.questions)
      .where(and(...conditions))
      .limit(limit)
  }

  // If not enough due questions, also get unseen questions
  if (questionsResult.length < limit) {
    const seenIds = await db
      .select({ questionId: schema.questionReviews.questionId })
      .from(schema.questionReviews)

    const seenSet = new Set(seenIds.map((s) => s.questionId))
    const remaining = limit - questionsResult.length

    let unseenConditions = []
    if (topicFilter) {
      const subtopicIds = await db
        .select({ id: schema.subtopics.id })
        .from(schema.subtopics)
        .where(eq(schema.subtopics.topicId, topicFilter))
      if (subtopicIds.length > 0) {
        unseenConditions.push(
          inArray(
            schema.questions.subtopicId,
            subtopicIds.map((s) => s.id)
          )
        )
      }
    }

    const candidates = await db
      .select()
      .from(schema.questions)
      .where(unseenConditions.length > 0 ? and(...unseenConditions) : undefined)
      .orderBy(sql`RANDOM()`)
      .limit(remaining + seenSet.size)

    const unseen = candidates.filter((q) => !seenSet.has(q.id)).slice(0, remaining)
    questionsResult.push(...unseen)
  }

  // Attach subtopic/topic info
  const enriched = await Promise.all(
    questionsResult.map(async (q) => {
      const [sub] = await db
        .select({
          name: schema.subtopics.name,
          topicId: schema.subtopics.topicId,
        })
        .from(schema.subtopics)
        .where(eq(schema.subtopics.id, q.subtopicId))
        .limit(1)

      let topicName = ''
      let topicSlug = ''
      if (sub) {
        const [t] = await db
          .select({ name: schema.topics.name, slug: schema.topics.slug })
          .from(schema.topics)
          .where(eq(schema.topics.id, sub.topicId))
          .limit(1)
        if (t) {
          topicName = t.name
          topicSlug = t.slug
        }
      }

      return {
        ...q,
        subtopicName: sub?.name ?? '',
        topicName,
        topicSlug,
      }
    })
  )

  return enriched
})
