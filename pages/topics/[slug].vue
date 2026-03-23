<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: topic, status } = await useFetch(`/api/topics/${slug}`)
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div v-if="status === 'pending'" class="text-center py-20">
      <div class="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>

    <div v-else-if="topic">
      <div class="flex items-center justify-between mb-6">
        <div>
          <NuxtLink to="/topics" class="text-sm text-text-muted hover:text-text-secondary transition-colors mb-2 block">
            ← Themenübersicht
          </NuxtLink>
          <h1 class="text-2xl font-bold text-text-primary flex items-center gap-3">
            <span>{{ topic.icon }}</span>
            {{ topic.name }}
          </h1>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase">
              {{ topic.examArea }}
            </span>
            <span
              class="text-xs px-2 py-0.5 rounded-full font-semibold"
              :class="`bg-prio-${topic.priority}/10 text-prio-${topic.priority}`"
            >
              Priorität {{ topic.priority }}
            </span>
          </div>
        </div>
        <NuxtLink
          :to="`/learn/${slug}`"
          class="px-5 py-2.5 bg-accent hover:bg-accent-bright text-white rounded-lg font-semibold text-sm transition-colors"
        >
          Jetzt üben →
        </NuxtLink>
      </div>

      <!-- Performance -->
      <div v-if="topic.performance" class="grid grid-cols-3 gap-4 mb-8">
        <div class="bg-bg-elevated rounded-lg p-4 border border-[var(--border)]">
          <div class="text-xl font-bold text-accent">
            {{ topic.performance.accuracyRate != null ? Math.round(topic.performance.accuracyRate * 100) + '%' : '–' }}
          </div>
          <div class="text-xs text-text-muted">Genauigkeit</div>
        </div>
        <div class="bg-bg-elevated rounded-lg p-4 border border-[var(--border)]">
          <div class="text-xl font-bold capitalize"
               :class="{
                 'text-text-muted': topic.performance.masteryLevel === 'not_started',
                 'text-red-400': topic.performance.masteryLevel === 'beginner',
                 'text-yellow-400': topic.performance.masteryLevel === 'learning',
                 'text-blue-400': topic.performance.masteryLevel === 'familiar',
                 'text-green-400': topic.performance.masteryLevel === 'mastered',
               }"
          >
            {{ topic.performance.masteryLevel?.replace('_', ' ') ?? '–' }}
          </div>
          <div class="text-xs text-text-muted">Meisterung</div>
        </div>
        <div class="bg-bg-elevated rounded-lg p-4 border border-[var(--border)]">
          <div class="text-xl font-bold"
               :class="{
                 'text-green-400': topic.performance.trend === 'improving',
                 'text-yellow-400': topic.performance.trend === 'stable',
                 'text-red-400': topic.performance.trend === 'declining',
               }"
          >
            {{ topic.performance.trend === 'improving' ? '↑ Aufwärts' : topic.performance.trend === 'declining' ? '↓ Abwärts' : '→ Stabil' }}
          </div>
          <div class="text-xs text-text-muted">Trend</div>
        </div>
      </div>

      <!-- Subtopics -->
      <div v-if="topic.subtopics?.length" class="space-y-3">
        <h2 class="text-lg font-bold text-text-primary mb-3">Unterthemen</h2>
        <div
          v-for="sub in topic.subtopics"
          :key="sub.id"
          class="bg-bg-elevated border border-[var(--border)] rounded-xl p-5"
        >
          <h3 class="font-semibold text-text-primary mb-2">{{ sub.name }}</h3>
          <div
            v-if="sub.contentMarkdown"
            class="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap"
          >
            {{ sub.contentMarkdown }}
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-text-muted">Noch keine Unterthemen vorhanden.</p>
      </div>
    </div>
  </div>
</template>
