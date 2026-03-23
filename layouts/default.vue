<script setup lang="ts">
const { stats, fetchStats } = useGameState()
const { daysLeft, urgency, urgencyColor, urgencyBg, isExamOver } = useExamCountdown()
const route = useRoute()

onMounted(fetchStats)

const navItems = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/learn', label: 'Lernen', icon: '🧠' },
  { path: '/exam', label: 'Prüfung', icon: '📝' },
  { path: '/topics', label: 'Themen', icon: '📚' },
  { path: '/stats', label: 'Statistiken', icon: '📈' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const levelProgress = computed(() => stats.value?.levelProgress ?? 0)
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside
      class="fixed left-0 top-0 h-screen w-64 flex flex-col border-r border-[var(--border)] bg-bg-secondary z-40"
    >
      <!-- Logo -->
      <div class="px-5 py-6 border-b border-[var(--border)]">
        <h1 class="text-xl font-bold tracking-tight">
          <span class="text-accent-bright">IHK</span> AP2 Trainer
        </h1>
        <p class="text-xs text-text-muted mt-1">FIAE · Sommer 2026</p>
      </div>

      <!-- XP / Level -->
      <div v-if="stats" class="px-5 py-4 border-b border-[var(--border)]">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-semibold text-accent-bright">Level {{ stats.level }}</span>
          <span class="text-xs text-text-muted">{{ stats.xp }} XP</span>
        </div>
        <div class="h-2 rounded-full bg-bg-elevated overflow-hidden">
          <div
            class="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent-bright progress-fill"
            :style="{ width: levelProgress + '%' }"
          />
        </div>
        <div class="flex items-center justify-between mt-2">
          <span class="text-xs text-text-muted">{{ stats.xpInLevel }} / {{ stats.xpNeeded }}</span>
          <div v-if="stats.streak > 0" class="flex items-center gap-1">
            <span class="text-sm">🔥</span>
            <span class="text-xs font-bold streak-flame">{{ stats.streak }}</span>
          </div>
        </div>
      </div>

      <!-- Exam Countdown -->
      <div class="px-5 py-3 border-b border-[var(--border)]">
        <div class="flex items-center justify-between">
          <span class="text-[10px] uppercase tracking-wider text-text-muted">Prüfung</span>
          <span class="text-[10px] text-text-muted">28.04.2026</span>
        </div>
        <div class="flex items-center gap-2.5 mt-1.5">
          <span class="text-2xl font-bold tabular-nums" :class="urgencyColor">{{ daysLeft }}</span>
          <div class="flex flex-col">
            <span class="text-xs text-text-secondary leading-tight">Tage</span>
            <span class="text-[10px] text-text-muted leading-tight">{{ isExamOver ? 'vorbei' : 'verbleibend' }}</span>
          </div>
          <div class="ml-auto w-2 h-2 rounded-full animate-pulse" :class="urgencyBg" />
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-3 py-4 space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-medium transition-all duration-150"
          :class="[
            isActive(item.path)
              ? 'bg-accent/10 text-accent-bright'
              : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover',
          ]"
        >
          <span class="text-base">{{ item.icon }}</span>
          {{ item.label }}
          <span
            v-if="item.path === '/learn' && stats?.dueReviews > 0"
            class="ml-auto text-xs bg-accent/20 text-accent-bright px-2 py-0.5 rounded-full"
          >
            {{ stats.dueReviews }}
          </span>
        </NuxtLink>
      </nav>

      <!-- Sound toggle -->
      <div class="px-5 py-4 border-t border-[var(--border)]">
        <button
          class="text-xs text-text-muted hover:text-text-secondary transition-colors"
          @click="useFeedback().soundEnabled.value = !useFeedback().soundEnabled.value"
        >
          {{ useFeedback().soundEnabled.value ? '🔊 Sound an' : '🔇 Sound aus' }}
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <main class="ml-64 flex-1 min-h-screen">
      <div class="max-w-6xl mx-auto px-8 py-8">
        <slot />
      </div>
    </main>
  </div>
</template>
