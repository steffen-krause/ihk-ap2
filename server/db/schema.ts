import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  real,
  date,
  timestamp,
  jsonb,
  pgEnum,
  unique,
} from 'drizzle-orm/pg-core'

// Enums
export const examAreaEnum = pgEnum('exam_area', ['ga1', 'ga2', 'wiso'])
export const questionTypeEnum = pgEnum('question_type', [
  'multiple_choice',
  'sql_editor',
  'pseudocode',
  'fill_blank',
  'matching',
  'true_false',
  'flashcard',
])
export const difficultyEnum = pgEnum('difficulty', ['easy', 'medium', 'hard'])
export const masteryLevelEnum = pgEnum('mastery_level', [
  'not_started',
  'beginner',
  'learning',
  'familiar',
  'mastered',
])
export const trendEnum = pgEnum('trend', ['improving', 'stable', 'declining'])
export const sessionTypeEnum = pgEnum('session_type', [
  'learn',
  'exam_ga1',
  'exam_ga2',
  'exam_wiso',
  'flashcard',
  'topic_practice',
])

// Topics — die 17 Hauptkategorien
export const topics = pgTable('topics', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  priority: integer('priority').notNull(), // 1-4
  description: text('description'),
  examArea: examAreaEnum('exam_area').notNull(),
  icon: text('icon'),
  sortOrder: integer('sort_order').notNull().default(0),
})

// Subtopics — Unterkategorien
export const subtopics = pgTable('subtopics', {
  id: serial('id').primaryKey(),
  topicId: integer('topic_id')
    .notNull()
    .references(() => topics.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  slug: text('slug').notNull(),
  contentMarkdown: text('content_markdown'),
  sortOrder: integer('sort_order').notNull().default(0),
})

// Questions — Alle Aufgabentypen
export const questions = pgTable('questions', {
  id: serial('id').primaryKey(),
  subtopicId: integer('subtopic_id')
    .notNull()
    .references(() => subtopics.id, { onDelete: 'cascade' }),
  type: questionTypeEnum('type').notNull(),
  difficulty: difficultyEnum('difficulty').notNull().default('medium'),
  questionText: text('question_text').notNull(),
  questionData: jsonb('question_data').notNull(), // typ-spezifische Daten
  explanation: text('explanation'),
  xpReward: integer('xp_reward').notNull().default(10),
  createdAt: timestamp('created_at').defaultNow(),
})

// Question Reviews — SM-2 Spaced Repetition
export const questionReviews = pgTable('question_reviews', {
  id: serial('id').primaryKey(),
  questionId: integer('question_id')
    .notNull()
    .unique()
    .references(() => questions.id, { onDelete: 'cascade' }),
  easinessFactor: real('easiness_factor').notNull().default(2.5),
  interval: integer('interval').notNull().default(1),
  repetitions: integer('repetitions').notNull().default(0),
  nextReviewDate: date('next_review_date').notNull(),
  lastReviewedAt: timestamp('last_reviewed_at'),
  lastQuality: integer('last_quality'),
})

// Answers — Antwortverlauf
export const answers = pgTable('answers', {
  id: serial('id').primaryKey(),
  questionId: integer('question_id')
    .notNull()
    .references(() => questions.id, { onDelete: 'cascade' }),
  givenAnswer: jsonb('given_answer'),
  isCorrect: boolean('is_correct').notNull(),
  quality: integer('quality').notNull(), // 0-5 SM-2 rating
  responseTimeMs: integer('response_time_ms'),
  xpEarned: integer('xp_earned').notNull().default(0),
  sessionId: integer('session_id').references(() => sessions.id, { onDelete: 'set null' }),
  answeredAt: timestamp('answered_at').defaultNow(),
})

// Sessions — Lern-/Prüfungssitzungen
export const sessions = pgTable('sessions', {
  id: serial('id').primaryKey(),
  type: sessionTypeEnum('type').notNull(),
  topicId: integer('topic_id').references(() => topics.id, { onDelete: 'set null' }),
  startedAt: timestamp('started_at').defaultNow(),
  endedAt: timestamp('ended_at'),
  totalQuestions: integer('total_questions').notNull().default(0),
  correctAnswers: integer('correct_answers').notNull().default(0),
  xpEarned: integer('xp_earned').notNull().default(0),
  scorePercent: real('score_percent'),
})

// User Stats — Single Row, Gamification
export const userStats = pgTable('user_stats', {
  id: serial('id').primaryKey(),
  totalXp: integer('total_xp').notNull().default(0),
  level: integer('level').notNull().default(1),
  currentStreak: integer('current_streak').notNull().default(0),
  longestStreak: integer('longest_streak').notNull().default(0),
  lastActiveDate: date('last_active_date'),
  totalSessions: integer('total_sessions').notNull().default(0),
  totalQuestionsAnswered: integer('total_questions_answered').notNull().default(0),
  totalCorrect: integer('total_correct').notNull().default(0),
})

// Topic Performance — Indikatoren pro Thema
export const topicPerformance = pgTable('topic_performance', {
  id: serial('id').primaryKey(),
  topicId: integer('topic_id')
    .notNull()
    .unique()
    .references(() => topics.id, { onDelete: 'cascade' }),
  totalAttempts: integer('total_attempts').notNull().default(0),
  correctAttempts: integer('correct_attempts').notNull().default(0),
  accuracyRate: real('accuracy_rate').notNull().default(0),
  avgResponseTimeMs: integer('avg_response_time_ms'),
  masteryLevel: masteryLevelEnum('mastery_level').notNull().default('not_started'),
  trend: trendEnum('trend').notNull().default('stable'),
  lastPracticedAt: timestamp('last_practiced_at'),
  needsMoreQuestions: boolean('needs_more_questions').notNull().default(false),
})

// Daily Activity — Streak + Heatmap
export const dailyActivity = pgTable(
  'daily_activity',
  {
    id: serial('id').primaryKey(),
    date: date('date').notNull(),
    questionsAnswered: integer('questions_answered').notNull().default(0),
    correctAnswers: integer('correct_answers').notNull().default(0),
    xpEarned: integer('xp_earned').notNull().default(0),
    timeSpentMinutes: integer('time_spent_minutes').notNull().default(0),
  },
  (table) => [unique('daily_activity_date_unique').on(table.date)]
)

// Type exports for use in API routes
export type Topic = typeof topics.$inferSelect
export type Subtopic = typeof subtopics.$inferSelect
export type Question = typeof questions.$inferSelect
export type QuestionReview = typeof questionReviews.$inferSelect
export type Answer = typeof answers.$inferSelect
export type Session = typeof sessions.$inferSelect
export type UserStat = typeof userStats.$inferSelect
export type TopicPerformance = typeof topicPerformance.$inferSelect
export type DailyActivity = typeof dailyActivity.$inferSelect
