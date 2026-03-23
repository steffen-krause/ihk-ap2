import { db, schema } from '~/server/db'
import { eq, sql, and, inArray } from 'drizzle-orm'

interface ExamStartBody {
  type: 'exam_ga1' | 'exam_ga2' | 'exam_wiso'
}

const EXAM_CONFIG = {
  exam_ga1: { minutes: 90, questionCount: 20, areas: ['ga1'] },
  exam_ga2: { minutes: 90, questionCount: 20, areas: ['ga2'] },
  exam_wiso: { minutes: 60, questionCount: 25, areas: ['wiso'] },
} as const

export default defineEventHandler(async (event) => {
  const body = await readBody<ExamStartBody>(event)
  if (!body.type || !EXAM_CONFIG[body.type]) {
    throw createError({ statusCode: 400, message: 'Invalid exam type' })
  }

  const config = EXAM_CONFIG[body.type]

  // Get topics for this exam area
  const examTopics = await db
    .select({ id: schema.topics.id })
    .from(schema.topics)
    .where(inArray(schema.topics.examArea, config.areas as any))

  const topicIds = examTopics.map((t) => t.id)
  if (topicIds.length === 0) {
    throw createError({ statusCode: 404, message: 'No topics found for this exam area' })
  }

  // Get subtopics
  const subs = await db
    .select({ id: schema.subtopics.id })
    .from(schema.subtopics)
    .where(inArray(schema.subtopics.topicId, topicIds))

  const subIds = subs.map((s) => s.id)

  // Get random questions for this exam
  let typeFilter = undefined
  if (body.type === 'exam_wiso') {
    typeFilter = eq(schema.questions.type, 'multiple_choice')
  }

  const conditions = [inArray(schema.questions.subtopicId, subIds)]
  if (typeFilter) conditions.push(typeFilter)

  const questions = await db
    .select({
      id: schema.questions.id,
      subtopicId: schema.questions.subtopicId,
      type: schema.questions.type,
      difficulty: schema.questions.difficulty,
      questionText: schema.questions.questionText,
      questionData: schema.questions.questionData,
      explanation: schema.questions.explanation,
      xpReward: schema.questions.xpReward,
      topicSlug: schema.topics.slug,
    })
    .from(schema.questions)
    .innerJoin(schema.subtopics, eq(schema.questions.subtopicId, schema.subtopics.id))
    .innerJoin(schema.topics, eq(schema.subtopics.topicId, schema.topics.id))
    .where(and(...conditions))
    .orderBy(sql`RANDOM()`)
    .limit(config.questionCount)

  // Create session
  const [session] = await db
    .insert(schema.sessions)
    .values({
      type: body.type,
      totalQuestions: questions.length,
    })
    .returning()

  return {
    session,
    questions,
    config: {
      minutes: config.minutes,
      questionCount: questions.length,
    },
  }
})
