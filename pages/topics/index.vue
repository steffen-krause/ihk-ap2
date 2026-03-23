<script setup lang="ts">
const { data: topics, status } = await useFetch('/api/topics')

const prioLabels: Record<number, string> = {
  1: 'Sehr hoch',
  2: 'Hoch',
  3: 'Mittel',
  4: 'Niedrig',
}

const masteryLabels: Record<string, string> = {
  not_started: 'Nicht gestartet',
  beginner: 'Anfänger',
  learning: 'Fortgeschritten',
  familiar: 'Weit fortgeschritten',
  mastered: 'Gemeistert',
}

const masteryColors: Record<string, string> = {
  not_started: 'text-text-muted',
  beginner: 'text-red-400',
  learning: 'text-yellow-400',
  familiar: 'text-blue-400',
  mastered: 'text-green-400',
}
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold text-text-primary">Themenübersicht</h1>
        <p class="text-sm text-text-secondary mt-1">Alle Prüfungsthemen im Überblick</p>
      </div>
      <NuxtLink to="/" class="text-sm text-text-muted hover:text-text-secondary transition-colors">
        ← Dashboard
      </NuxtLink>
    </div>

    <div v-if="status === 'pending'" class="text-center py-20">
      <div class="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>

    <div v-else class="space-y-3">
      <NuxtLink
        v-for="topic in topics"
        :key="topic.id"
        :to="`/topics/${topic.slug}`"
        class="block bg-bg-elevated border border-[var(--border)] rounded-xl p-5 hover:border-accent/30 transition-all group"
      >
        <div class="flex items-center gap-4">
          <div class="text-2xl w-10 text-center">{{ topic.icon ?? '📖' }}</div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <h2 class="text-base font-bold text-text-primary group-hover:text-accent transition-colors truncate">
                {{ topic.name }}
              </h2>
              <span
                class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0"
                :class="`bg-prio-${topic.priority}/10 text-prio-${topic.priority}`"
              >
                P{{ topic.priority }}
              </span>
              <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-bg-hover text-text-muted uppercase shrink-0">
                {{ topic.examArea }}
              </span>
            </div>
            <div class="flex items-center gap-4 mt-1.5">
              <span :class="masteryColors[topic.performance?.masteryLevel ?? 'not_started']" class="text-xs font-semibold">
                {{ masteryLabels[topic.performance?.masteryLevel ?? 'not_started'] }}
              </span>
              <div v-if="topic.performance?.accuracyRate != null" class="flex items-center gap-1.5">
                <div class="w-20 h-1.5 bg-bg-hover rounded-full overflow-hidden">
                  <div
                    class="h-full bg-accent rounded-full"
                    :style="{ width: Math.round(topic.performance.accuracyRate * 100) + '%' }"
                  />
                </div>
                <span class="text-[10px] text-text-muted">{{ Math.round(topic.performance.accuracyRate * 100) }}%</span>
              </div>
              <span
                v-if="topic.performance?.needsMoreQuestions"
                class="text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20"
              >
                Mehr üben!
              </span>
            </div>
          </div>
          <div class="text-text-muted group-hover:text-accent transition-colors">→</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
