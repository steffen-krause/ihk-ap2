import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import type { TopicSeed } from './seed-types'
import { allQuestions as questionSeeds } from './questions'

const DATABASE_URL = process.env.DATABASE_URL ?? 'postgres://ihk:ihk@localhost:5433/ihk_ap2'
const sql = postgres(DATABASE_URL)
const db = drizzle(sql, { schema })

// ========= TOPICS =========
const topicSeeds: TopicSeed[] = [
  {
    name: 'Pseudocode & Algorithmen',
    slug: 'pseudocode',
    priority: 1,
    examArea: 'ga2',
    icon: '🧮',
    subtopics: [
      { name: 'Kontrollstrukturen', slug: 'kontrollstrukturen' },
      { name: 'Sortieralgorithmen', slug: 'sortieralgorithmen' },
      { name: 'Suchalgorithmen', slug: 'suchalgorithmen' },
      { name: 'Rekursion', slug: 'rekursion' },
    ],
  },
  {
    name: 'SQL',
    slug: 'sql',
    priority: 1,
    examArea: 'ga1',
    icon: '🗃️',
    subtopics: [
      { name: 'SELECT & Grundlagen', slug: 'select-grundlagen' },
      { name: 'JOINs', slug: 'joins' },
      { name: 'Aggregatfunktionen', slug: 'aggregat' },
      { name: 'Subqueries & INSERT/UPDATE/DELETE', slug: 'dml-subqueries' },
    ],
  },
  {
    name: 'Datenbanken (Theorie)',
    slug: 'datenbanken',
    priority: 1,
    examArea: 'ga1',
    icon: '🏗️',
    subtopics: [
      { name: 'ER-Modell', slug: 'er-modell' },
      { name: 'Normalisierung', slug: 'normalisierung' },
      { name: 'Referentielle Integrität', slug: 'referentielle-integritaet' },
      { name: 'Transaktionen & ACID', slug: 'transaktionen' },
    ],
  },
  {
    name: 'UML-Diagramme',
    slug: 'uml',
    priority: 1,
    examArea: 'ga2',
    icon: '📐',
    subtopics: [
      { name: 'Klassendiagramm', slug: 'klassendiagramm' },
      { name: 'Anwendungsfalldiagramm', slug: 'use-case' },
      { name: 'Aktivitätsdiagramm', slug: 'aktivitaetsdiagramm' },
      { name: 'Sequenzdiagramm', slug: 'sequenzdiagramm' },
    ],
  },
  {
    name: 'Testen & Qualitätssicherung',
    slug: 'testing',
    priority: 2,
    examArea: 'ga2',
    icon: '🧪',
    subtopics: [
      { name: 'Testarten', slug: 'testarten' },
      { name: 'Testmethoden', slug: 'testmethoden' },
      { name: 'Äquivalenzklassen & Grenzwerte', slug: 'aequivalenzklassen' },
    ],
  },
  {
    name: 'IT-Sicherheit & Datenschutz',
    slug: 'it-sicherheit',
    priority: 2,
    examArea: 'ga1',
    icon: '🔒',
    subtopics: [
      { name: 'Schutzziele', slug: 'schutzziele' },
      { name: 'Verschlüsselung', slug: 'verschluesselung' },
      { name: 'Datenschutz (DSGVO)', slug: 'dsgvo' },
      { name: 'Angriffsmethoden', slug: 'angriffsmethoden' },
    ],
  },
  {
    name: 'Netzwerktechnik',
    slug: 'netzwerk',
    priority: 2,
    examArea: 'ga1',
    icon: '🌐',
    subtopics: [
      { name: 'OSI-Modell & TCP/IP', slug: 'osi-tcpip' },
      { name: 'IP-Adressen & Subnetting', slug: 'ip-subnetting' },
      { name: 'Protokolle', slug: 'protokolle' },
      { name: 'Netzwerkgeräte', slug: 'netzwerkgeraete' },
    ],
  },
  {
    name: 'Vorgehensmodelle',
    slug: 'vorgehensmodelle',
    priority: 3,
    examArea: 'ga2',
    icon: '🔄',
    subtopics: [
      { name: 'Wasserfallmodell', slug: 'wasserfall' },
      { name: 'Agile Modelle (Scrum/Kanban)', slug: 'agile' },
      { name: 'V-Modell & Spiralmodell', slug: 'v-modell-spiral' },
    ],
  },
  {
    name: 'OOP & Design Patterns',
    slug: 'oop',
    priority: 3,
    examArea: 'ga2',
    icon: '🧩',
    subtopics: [
      { name: 'OOP-Grundlagen', slug: 'oop-grundlagen' },
      { name: 'SOLID-Prinzipien', slug: 'solid' },
      { name: 'Design Patterns', slug: 'design-patterns' },
    ],
  },
  {
    name: 'Schnittstellen & Datenaustausch',
    slug: 'schnittstellen',
    priority: 3,
    examArea: 'ga2',
    icon: '🔌',
    subtopics: [
      { name: 'REST-API', slug: 'rest-api' },
      { name: 'JSON & XML', slug: 'json-xml' },
      { name: 'HTTP-Methoden & Statuscodes', slug: 'http' },
    ],
  },
  {
    name: 'Versionsverwaltung (Git)',
    slug: 'git',
    priority: 3,
    examArea: 'ga2',
    icon: '📦',
    subtopics: [
      { name: 'Git-Grundlagen', slug: 'git-grundlagen' },
      { name: 'Branching & Merging', slug: 'branching' },
    ],
  },
  {
    name: 'Speicherlösungen',
    slug: 'speicher',
    priority: 3,
    examArea: 'ga1',
    icon: '💾',
    subtopics: [
      { name: 'RAID-Level', slug: 'raid' },
      { name: 'Cloud & Virtualisierung', slug: 'cloud' },
      { name: 'Backup-Strategien', slug: 'backup' },
    ],
  },
  {
    name: 'Softwareergonomie',
    slug: 'ergonomie',
    priority: 3,
    examArea: 'ga2',
    icon: '🖥️',
    subtopics: [
      { name: 'Usability-Grundsätze', slug: 'usability' },
      { name: 'Barrierefreiheit', slug: 'barrierefreiheit' },
    ],
  },
  {
    name: 'Programmiersprachen (Theorie)',
    slug: 'programmiersprachen',
    priority: 3,
    examArea: 'ga2',
    icon: '📝',
    subtopics: [
      { name: 'Paradigmen', slug: 'paradigmen' },
      { name: 'Compiler vs Interpreter', slug: 'compiler-interpreter' },
    ],
  },
  {
    name: 'WiSo',
    slug: 'wiso',
    priority: 4,
    examArea: 'wiso',
    icon: '📋',
    subtopics: [
      { name: 'Arbeitsrecht', slug: 'arbeitsrecht' },
      { name: 'Vertragsrecht', slug: 'vertragsrecht' },
      { name: 'Wirtschaftsgrundlagen', slug: 'wirtschaft' },
    ],
  },
  {
    name: 'Datenstrukturen',
    slug: 'datenstrukturen',
    priority: 4,
    examArea: 'ga2',
    icon: '🌳',
    subtopics: [
      { name: 'Arrays, Listen, Stacks, Queues', slug: 'grundstrukturen' },
      { name: 'Bäume & Graphen', slug: 'baeume-graphen' },
    ],
  },
  {
    name: 'Webentwicklung',
    slug: 'webentwicklung',
    priority: 4,
    examArea: 'ga2',
    icon: '🌍',
    subtopics: [
      { name: 'HTML/CSS/JS Grundlagen', slug: 'html-css-js' },
      { name: 'Client-Server-Modell', slug: 'client-server' },
    ],
  },
]

// ========= SEED FUNCTION =========
async function seed() {
  console.log('🌱 Seeding database...')

  // Clean existing data
  console.log('  Cleaning existing data...')
  await db.delete(schema.dailyActivity)
  await db.delete(schema.topicPerformance)
  await db.delete(schema.userStats)
  await db.delete(schema.answers)
  await db.delete(schema.questionReviews)
  await db.delete(schema.sessions)
  await db.delete(schema.questions)
  await db.delete(schema.subtopics)
  await db.delete(schema.topics)

  // Insert topics
  console.log('  Inserting topics...')
  const topicMap = new Map<string, number>()
  for (let i = 0; i < topicSeeds.length; i++) {
    const t = topicSeeds[i]
    const [inserted] = await db
      .insert(schema.topics)
      .values({
        name: t.name,
        slug: t.slug,
        priority: t.priority,
        examArea: t.examArea,
        icon: t.icon,
        sortOrder: i,
      })
      .returning({ id: schema.topics.id })
    topicMap.set(t.slug, inserted.id)
  }
  console.log(`  ✓ ${topicMap.size} topics inserted`)

  // Insert subtopics
  console.log('  Inserting subtopics...')
  const subtopicMap = new Map<string, number>()
  let subtopicCount = 0
  for (const t of topicSeeds) {
    const topicId = topicMap.get(t.slug)!
    for (let i = 0; i < t.subtopics.length; i++) {
      const s = t.subtopics[i]
      const key = `${t.slug}/${s.slug}`
      const [inserted] = await db
        .insert(schema.subtopics)
        .values({
          topicId,
          name: s.name,
          slug: s.slug,
          contentMarkdown: s.content ?? null,
          sortOrder: i,
        })
        .returning({ id: schema.subtopics.id })
      subtopicMap.set(key, inserted.id)
      subtopicCount++
    }
  }
  console.log(`  ✓ ${subtopicCount} subtopics inserted`)

  // Insert questions
  console.log('  Inserting questions...')
  let questionCount = 0
  for (const q of questionSeeds) {
    const subtopicKey = `${q.topicSlug}/${q.subtopicSlug}`
    const subtopicId = subtopicMap.get(subtopicKey)
    if (!subtopicId) {
      console.warn(`  ⚠ Subtopic not found: ${subtopicKey}`)
      continue
    }
    await db.insert(schema.questions).values({
      subtopicId,
      type: q.type,
      difficulty: q.difficulty,
      questionText: q.questionText,
      questionData: q.questionData,
      explanation: q.explanation ?? null,
      xpReward: q.xpReward ?? 10,
    })
    questionCount++
  }
  console.log(`  ✓ ${questionCount} questions inserted`)

  // Insert initial user stats
  await db.insert(schema.userStats).values({
    totalXp: 0,
    level: 1,
    currentStreak: 0,
    longestStreak: 0,
    totalSessions: 0,
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
  })
  console.log('  ✓ User stats initialized')

  // Insert topic performance entries
  for (const [, topicId] of topicMap) {
    await db.insert(schema.topicPerformance).values({
      topicId,
      totalAttempts: 0,
      correctAttempts: 0,
      accuracyRate: 0,
      masteryLevel: 'not_started',
      trend: 'stable',
      needsMoreQuestions: false,
    })
  }
  console.log('  ✓ Topic performance initialized')

  console.log('\n✅ Seeding complete!')
  console.log(`   ${topicMap.size} Topics, ${subtopicCount} Subtopics, ${questionCount} Questions`)

  await sql.end()
  process.exit(0)
}

seed().catch((e) => {
  console.error('❌ Seed error:', e)
  process.exit(1)
})
