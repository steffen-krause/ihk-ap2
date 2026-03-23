<script setup lang="ts">
const { stats, fetchStats } = useGameState()
const { daysLeft, hoursLeft, urgency, urgencyColor, urgencyBg, timeProgress, isExamOver } = useExamCountdown()
const { data: topics } = await useFetch('/api/topics')
const { data: heatmap } = await useFetch('/api/stats/heatmap')

onMounted(fetchStats)

const priorityLabel: Record<number, string> = {
  1: 'PRIO 1',
  2: 'PRIO 2',
  3: 'PRIO 3',
  4: 'PRIO 4',
}

const priorityColor: Record<number, string> = {
  1: 'bg-prio-1/15 text-prio-1 border-prio-1/30',
  2: 'bg-prio-2/15 text-prio-2 border-prio-2/30',
  3: 'bg-prio-3/15 text-prio-3 border-prio-3/30',
  4: 'bg-prio-4/15 text-prio-4 border-prio-4/30',
}

const masteryLabel: Record<string, string> = {
  not_started: 'Nicht gestartet',
  beginner: 'Anfänger',
  learning: 'Lernend',
  familiar: 'Vertraut',
  mastered: 'Gemeistert',
}

const masteryPercent: Record<string, number> = {
  not_started: 0,
  beginner: 20,
  learning: 45,
  familiar: 70,
  mastered: 100,
}

// Heatmap computation — 12 weeks
const heatmapGrid = computed(() => {
  const days: Array<{ date: string; level: number; count: number }> = []
  const activityMap = new Map<string, number>()

  if (heatmap.value) {
    for (const d of heatmap.value) {
      activityMap.set(d.date, d.questionsAnswered)
    }
  }

  const today = new Date()
  for (let i = 83; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    const count = activityMap.get(dateStr) ?? 0
    const level = count === 0 ? 0 : count <= 5 ? 1 : count <= 15 ? 2 : count <= 30 ? 3 : 4
    days.push({ date: dateStr, level, count })
  }
  return days
})

const heatmapColors: Record<number, string> = {
  0: 'bg-bg-elevated',
  1: 'bg-accent-dim/40',
  2: 'bg-accent-dim/70',
  3: 'bg-accent',
  4: 'bg-accent-bright',
}

// Exam readiness assessment based on readiness score + days left
const examAssessment = computed(() => {
  const score = stats.value?.readinessScore ?? 0
  const days = daysLeft.value

  // ideal pace: score should be ~(1 - daysLeft/totalDays)*100
  const expectedScore = Math.max(0, Math.min(100, timeProgress.value * 0.85))
  const delta = score - expectedScore

  if (isExamOver.value) return { text: 'Prüfung ist vorbei — check deine Ergebnisse!', mood: 'text-text-secondary' }
  if (score >= 80 && days < 30) return { text: 'Ausgezeichnet! Du bist gut vorbereitet.', mood: 'text-green-400' }
  if (score >= 60 && days < 30) return { text: 'Guter Stand — fokussiere auf Schwächen.', mood: 'text-blue-400' }
  if (delta >= 10) return { text: 'Du liegst über Plan — weiter so!', mood: 'text-green-400' }
  if (delta >= -5) return { text: 'Du bist im Zeitplan. Bleib dran!', mood: 'text-blue-400' }
  if (delta >= -20) return { text: 'Etwas hinter dem Plan — steigere dein Tempo.', mood: 'text-yellow-400' }
  return { text: 'Deutlich hinter dem Zeitplan — jetzt Gas geben!', mood: 'text-red-400' }
})

// Recommended daily questions based on remaining days
const recommendedDaily = computed(() => {
  if (daysLeft.value <= 0) return 0
  const totalTarget = 2000
  const answered = stats.value?.totalQuestionsAnswered ?? 0
  const remaining = Math.max(0, totalTarget - answered)
  return Math.max(5, Math.ceil(remaining / daysLeft.value))
})
</script>

<template>
  <div class="space-y-8 animate-slide-up">
    <!-- Hero -->
    <div class="flex items-start justify-between">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Willkommen zurück</h1>
        <p class="text-text-secondary mt-1">
          <template v-if="stats?.dueReviews > 0">
            {{ stats.dueReviews }} Fragen warten auf Wiederholung
          </template>
          <template v-else> Alle Wiederholungen erledigt — lerne neue Themen! </template>
        </p>
      </div>

      <!-- Readiness Score -->
      <div
        v-if="stats"
        class="flex flex-col items-center px-6 py-4 rounded-lg bg-bg-card border border-[var(--border)]"
      >
        <span class="text-xs text-text-muted uppercase tracking-wider mb-1"
          >Prüfungsbereitschaft</span
        >
        <span
          class="text-3xl font-bold"
          :class="{
            'text-red-400': stats.readinessScore < 30,
            'text-yellow-400': stats.readinessScore >= 30 && stats.readinessScore < 60,
            'text-blue-400': stats.readinessScore >= 60 && stats.readinessScore < 80,
            'text-green-400': stats.readinessScore >= 80,
          }"
        >
          {{ stats.readinessScore }}%
        </span>
      </div>
    </div>

    <!-- Exam Countdown Card -->
    <div class="relative overflow-hidden rounded-xl bg-bg-card border border-[var(--border)] p-6">
      <!-- Subtle background gradient based on urgency -->
      <div
        class="absolute inset-0 opacity-[0.04]"
        :class="{
          'bg-gradient-to-r from-green-500 to-emerald-600': urgency === 'relaxed',
          'bg-gradient-to-r from-blue-500 to-indigo-600': urgency === 'normal',
          'bg-gradient-to-r from-yellow-500 to-orange-500': urgency === 'pressing',
          'bg-gradient-to-r from-red-500 to-rose-600': urgency === 'critical',
        }"
      />

      <div class="relative flex items-center gap-8">
        <!-- Countdown number -->
        <div class="flex flex-col items-center min-w-[120px]">
          <span class="text-6xl font-black tabular-nums leading-none" :class="urgencyColor">{{ daysLeft }}</span>
          <span class="text-sm text-text-muted mt-1">Tage bis zur Prüfung</span>
        </div>

        <!-- Vertical divider -->
        <div class="w-px h-20 bg-[var(--border)]" />

        <!-- Assessment + Progress -->
        <div class="flex-1 space-y-3">
          <div>
            <p class="text-sm font-semibold" :class="examAssessment.mood">{{ examAssessment.text }}</p>
            <p class="text-xs text-text-muted mt-0.5">
              Empfehlung: <span class="text-text-secondary font-medium">{{ recommendedDaily }} Fragen/Tag</span>
              · Heute: <span class="font-medium" :class="(stats?.todayActivity?.questionsAnswered ?? 0) >= recommendedDaily ? 'text-green-400' : 'text-text-secondary'">{{ stats?.todayActivity?.questionsAnswered ?? 0 }}</span>
            </p>
          </div>

          <!-- Time progress bar -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] uppercase tracking-wider text-text-muted">Zeitfortschritt</span>
              <span class="text-[10px] text-text-muted">{{ Math.round(timeProgress) }}% der Vorbereitungszeit vergangen</span>
            </div>
            <div class="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
              <div class="h-full rounded-full transition-all duration-700" :class="urgencyBg" :style="{ width: timeProgress + '%' }" />
            </div>
          </div>

          <!-- Mini stats row -->
          <div class="flex items-center gap-4 text-xs text-text-muted">
            <span v-if="stats">Bereitschaft: <span class="font-semibold" :class="urgencyColor">{{ stats.readinessScore }}%</span></span>
            <span>·</span>
            <span>{{ hoursLeft }} Stunden verbleibend</span>
            <span>·</span>
            <span>28. April 2026</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-3 gap-4">
      <NuxtLink
        to="/learn"
        class="group flex items-center gap-4 p-5 rounded-lg bg-bg-card border border-[var(--border)] card-hover"
      >
        <div
          class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
        >
          🧠
        </div>
        <div>
          <p class="font-semibold">Lernsession starten</p>
          <p class="text-sm text-text-muted">
            {{ stats?.dueReviews ?? 0 }} fällige Karten
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/exam"
        class="group flex items-center gap-4 p-5 rounded-lg bg-bg-card border border-[var(--border)] card-hover"
      >
        <div
          class="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
        >
          📝
        </div>
        <div>
          <p class="font-semibold">Prüfung simulieren</p>
          <p class="text-sm text-text-muted">GA1 · GA2 · WiSo</p>
        </div>
      </NuxtLink>

      <NuxtLink
        v-if="stats?.weakestTopic"
        :to="`/learn?topic=${stats.weakestTopic.topicSlug}`"
        class="group flex items-center gap-4 p-5 rounded-lg bg-bg-card border border-red-500/20 card-hover"
      >
        <div
          class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
        >
          🎯
        </div>
        <div>
          <p class="font-semibold">Schwäche üben</p>
          <p class="text-sm text-red-400 truncate max-w-[160px]">
            {{ stats.weakestTopic.topicName }}
          </p>
        </div>
      </NuxtLink>
      <div
        v-else
        class="flex items-center gap-4 p-5 rounded-lg bg-bg-card border border-[var(--border)] opacity-50"
      >
        <div class="w-12 h-12 rounded-lg bg-bg-elevated flex items-center justify-center text-2xl">
          ✅
        </div>
        <div>
          <p class="font-semibold">Keine Schwächen</p>
          <p class="text-sm text-text-muted">Mach weiter so!</p>
        </div>
      </div>
    </div>

    <!-- Stats Row -->
    <div v-if="stats" class="grid grid-cols-4 gap-4">
      <div class="p-4 rounded-lg bg-bg-card border border-[var(--border)]">
        <p class="text-xs text-text-muted uppercase tracking-wider">Heute</p>
        <p class="text-2xl font-bold mt-1">
          {{ stats.todayActivity?.questionsAnswered ?? 0 }}
        </p>
        <p class="text-xs text-text-muted">Fragen beantwortet</p>
      </div>
      <div class="p-4 rounded-lg bg-bg-card border border-[var(--border)]">
        <p class="text-xs text-text-muted uppercase tracking-wider">Gesamt</p>
        <p class="text-2xl font-bold mt-1">{{ stats.totalQuestionsAnswered }}</p>
        <p class="text-xs text-text-muted">Fragen beantwortet</p>
      </div>
      <div class="p-4 rounded-lg bg-bg-card border border-[var(--border)]">
        <p class="text-xs text-text-muted uppercase tracking-wider">Genauigkeit</p>
        <p class="text-2xl font-bold mt-1">{{ stats.overallAccuracy }}%</p>
        <p class="text-xs text-text-muted">korrekt</p>
      </div>
      <div class="p-4 rounded-lg bg-bg-card border border-[var(--border)]">
        <p class="text-xs text-text-muted uppercase tracking-wider">Streak</p>
        <p class="text-2xl font-bold mt-1">
          🔥 {{ stats.streak }}
        </p>
        <p class="text-xs text-text-muted">Tage in Folge</p>
      </div>
    </div>

    <!-- Activity Heatmap -->
    <div class="p-5 rounded-lg bg-bg-card border border-[var(--border)]">
      <h2 class="text-sm font-semibold text-text-secondary mb-4">Aktivität (12 Wochen)</h2>
      <div class="flex flex-wrap gap-[3px]">
        <div
          v-for="day in heatmapGrid"
          :key="day.date"
          class="w-3 h-3 rounded-[3px] transition-colors"
          :class="heatmapColors[day.level]"
          :title="`${day.date}: ${day.count} Fragen`"
        />
      </div>
      <div class="flex items-center gap-2 mt-3 text-xs text-text-muted">
        <span>Weniger</span>
        <div class="w-3 h-3 rounded-[3px] bg-bg-elevated" />
        <div class="w-3 h-3 rounded-[3px] bg-accent-dim/40" />
        <div class="w-3 h-3 rounded-[3px] bg-accent-dim/70" />
        <div class="w-3 h-3 rounded-[3px] bg-accent" />
        <div class="w-3 h-3 rounded-[3px] bg-accent-bright" />
        <span>Mehr</span>
      </div>
    </div>

    <!-- Topics Grid -->
    <div>
      <h2 class="text-lg font-bold mb-4">Themen-Übersicht</h2>
      <div class="grid grid-cols-2 gap-4">
        <NuxtLink
          v-for="topic in topics"
          :key="topic.id"
          :to="`/topics/${topic.slug}`"
          class="p-4 rounded-lg bg-bg-card border border-[var(--border)] card-hover relative overflow-hidden"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xl">{{ topic.icon ?? '📘' }}</span>
              <h3 class="font-semibold text-sm leading-tight">{{ topic.name }}</h3>
            </div>
            <span
              class="text-[10px] font-bold px-2 py-0.5 rounded-full border"
              :class="priorityColor[topic.priority]"
            >
              {{ priorityLabel[topic.priority] }}
            </span>
          </div>

          <!-- Mastery bar -->
          <div class="mt-2">
            <div class="flex items-center justify-between mb-1">
              <span
                class="text-xs"
                :class="`mastery-${topic.performance?.masteryLevel ?? 'not_started'}`"
              >
                {{ masteryLabel[topic.performance?.masteryLevel ?? 'not_started'] }}
              </span>
              <span class="text-xs text-text-muted">
                {{ topic.performance?.accuracyRate ? Math.round(topic.performance.accuracyRate * 100) : 0 }}%
              </span>
            </div>
            <div class="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
              <div
                class="h-full rounded-full progress-fill"
                :class="{
                  'bg-red-400': (topic.performance?.masteryLevel ?? 'not_started') === 'beginner',
                  'bg-yellow-400': topic.performance?.masteryLevel === 'learning',
                  'bg-blue-400': topic.performance?.masteryLevel === 'familiar',
                  'bg-green-400': topic.performance?.masteryLevel === 'mastered',
                  'bg-bg-elevated': !topic.performance || topic.performance.masteryLevel === 'not_started',
                }"
                :style="{
                  width: masteryPercent[topic.performance?.masteryLevel ?? 'not_started'] + '%',
                }"
              />
            </div>
          </div>

          <!-- Needs more questions indicator -->
          <div
            v-if="topic.performance?.needsMoreQuestions"
            class="absolute top-3 right-3"
            title="Mehr Übungsaufgaben benötigt"
          >
            <span class="text-xs">⚠️</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
