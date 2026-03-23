import { db, schema } from '~/server/db'
import { eq, asc } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, message: 'Missing slug' })

  const [topic] = await db.select().from(schema.topics).where(eq(schema.topics.slug, slug)).limit(1)
  if (!topic) throw createError({ statusCode: 404, message: 'Topic not found' })

  const subs = await db
    .select()
    .from(schema.subtopics)
    .where(eq(schema.subtopics.topicId, topic.id))
    .orderBy(asc(schema.subtopics.sortOrder))

  const [perf] = await db
    .select()
    .from(schema.topicPerformance)
    .where(eq(schema.topicPerformance.topicId, topic.id))
    .limit(1)

  return {
    ...topic,
    subtopics: subs,
    performance: perf ?? null,
  }
})
