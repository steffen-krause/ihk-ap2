<script setup lang="ts">
const { data: overview, status } = await useFetch('/api/stats/overview')
const { data: heatmap } = await useFetch('/api/stats/heatmap')

const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

function intensityClass(count: number) {
  if (count === 0) return 'bg-bg-elevated'
  if (count <= 5) return 'bg-accent/20'
  if (count <= 15) return 'bg-accent/40'
  if (count <= 30) return 'bg-accent/60'
  return 'bg-accent'
}

const heatmapWeeks = computed(() => {
  const days = heatmap.value ?? []
  const weeks: any[][] = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }
  return weeks
})
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold text-text-primary">Statistiken</h1>
        <p class="text-sm text-text-secondary mt-1">Dein Lernfortschritt im Detail</p>
      </div>
      <NuxtLink to="/" class="text-sm text-text-muted hover:text-text-secondary transition-colors">
        ← Dashboard
      </NuxtLink>
    </div>

    <div v-if="status === 'pending'" class="text-center py-20">
      <div class="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>

    <div v-else-if="overview">
      <!-- Main Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-accent">{{ overview.xp?.toLocaleString() ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Gesamt-XP</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-yellow-400">Level {{ overview.level ?? 1 }}</div>
          <div class="text-xs text-text-muted mt-1">Aktuelles Level</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-orange-400">{{ overview.streak ?? 0 }} 🔥</div>
          <div class="text-xs text-text-muted mt-1">Aktuelle Streak</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-text-primary">{{ overview.longestStreak ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Längste Streak</div>
        </div>
      </div>

      <!-- Today -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-text-primary">{{ overview.todayActivity?.questionsAnswered ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Heute beantwortet</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-green-400">{{ overview.todayActivity?.correctAnswers ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Heute richtig</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-accent">+{{ overview.todayActivity?.xpEarned ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Heute XP</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-text-primary">{{ overview.dueReviews ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Fällige Reviews</div>
        </div>
      </div>

      <!-- Overall -->
      <div class="grid grid-cols-3 gap-4 mb-8">
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-text-primary">{{ overview.totalQuestionsAnswered ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Gesamt beantwortet</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold text-green-400">{{ overview.totalCorrect ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Gesamt richtig</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-5 border border-[var(--border)]">
          <div class="text-2xl font-bold"
               :class="(overview.totalQuestionsAnswered ?? 0) > 0 ? 'text-accent' : 'text-text-muted'">
            {{ (overview.totalQuestionsAnswered ?? 0) > 0 ? Math.round(((overview.totalCorrect ?? 0) / overview.totalQuestionsAnswered) * 100) : 0 }}%
          </div>
          <div class="text-xs text-text-muted mt-1">Gesamtgenauigkeit</div>
        </div>
      </div>

      <!-- Readiness -->
      <div class="bg-bg-elevated rounded-xl p-6 border border-[var(--border)] mb-8">
        <h2 class="text-lg font-bold text-text-primary mb-3">Prüfungsbereitschaft</h2>
        <div class="flex items-center gap-4">
          <div class="relative w-20 h-20">
            <svg class="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                class="text-bg-hover"
                d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              />
              <path
                class="text-accent"
                d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                :stroke-dasharray="`${(overview.readinessScore ?? 0)}, 100`"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-lg font-bold text-accent">{{ overview.readinessScore ?? 0 }}%</span>
            </div>
          </div>
          <div>
            <p class="text-sm text-text-secondary">
              {{ (overview.readinessScore ?? 0) >= 80 ? 'Du bist gut vorbereitet! Weiter so.' :
                 (overview.readinessScore ?? 0) >= 50 ? 'Auf gutem Weg – bleib dran!' :
                 'Noch viel zu tun. Fokussiere dich auf die Priorität-1-Themen.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Heatmap -->
      <div class="bg-bg-elevated rounded-xl p-6 border border-[var(--border)] mb-8">
        <h2 class="text-lg font-bold text-text-primary mb-4">Aktivität (12 Wochen)</h2>
        <div class="flex gap-1">
          <div class="flex flex-col gap-1 mr-2 text-[10px] text-text-muted pt-0">
            <div v-for="day in weekDays" :key="day" class="h-3 flex items-center">{{ day }}</div>
          </div>
          <div v-for="(week, wi) in heatmapWeeks" :key="wi" class="flex flex-col gap-1">
            <div
              v-for="(day, di) in week"
              :key="di"
              class="w-3 h-3 rounded-sm transition-colors"
              :class="intensityClass(day?.questionsAnswered ?? 0)"
              :title="`${day?.date ?? ''}: ${day?.questionsAnswered ?? 0} Fragen`"
            />
          </div>
        </div>
      </div>

      <!-- Weak Topic -->
      <div v-if="overview.weakestTopic" class="bg-red-500/5 rounded-xl p-6 border border-red-500/20">
        <h2 class="text-lg font-bold text-red-400 mb-2">⚠ Schwachstelle</h2>
        <p class="text-sm text-text-secondary">
          <strong class="text-text-primary">{{ overview.weakestTopic.name }}</strong> hat die niedrigste Genauigkeit.
          Fokussiere deine nächsten Lernsessions auf dieses Thema.
        </p>
        <NuxtLink
          :to="`/learn/${overview.weakestTopic.slug}`"
          class="inline-block mt-3 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm font-semibold hover:bg-red-500/20 transition-colors"
        >
          Jetzt üben →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
