<script setup lang="ts">
const examTypes = [
  {
    type: 'exam_ga1',
    title: 'GA1 – Fachrichtungsübergreifend',
    description: 'IT-Grundlagen, Netzwerke, Datenbanken, IT-Sicherheit',
    duration: '90 Minuten',
    questions: 20,
    icon: '🖥️',
    color: 'blue',
  },
  {
    type: 'exam_ga2',
    title: 'GA2 – Anwendungsentwicklung',
    description: 'Programmierung, UML, Pseudocode, Testing, Vorgehensmodelle',
    duration: '90 Minuten',
    questions: 20,
    icon: '💻',
    color: 'purple',
  },
  {
    type: 'exam_wiso',
    title: 'WiSo – Wirtschafts- und Sozialkunde',
    description: 'Arbeitsrecht, Wirtschaft, Vertragsrecht',
    duration: '60 Minuten',
    questions: 25,
    icon: '📋',
    color: 'green',
  },
]
</script>

<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold text-text-primary">Prüfungssimulation</h1>
        <p class="text-sm text-text-secondary mt-1">Simuliere eine echte AP2-Prüfung unter Zeitdruck</p>
      </div>
      <NuxtLink to="/" class="text-sm text-text-muted hover:text-text-secondary transition-colors">
        ← Dashboard
      </NuxtLink>
    </div>

    <div class="space-y-4">
      <NuxtLink
        v-for="exam in examTypes"
        :key="exam.type"
        :to="`/exam/${exam.type}`"
        class="block bg-bg-elevated border border-[var(--border)] rounded-xl p-6 hover:border-accent/30 transition-all group"
      >
        <div class="flex items-start gap-4">
          <div class="text-3xl">{{ exam.icon }}</div>
          <div class="flex-1">
            <h2 class="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
              {{ exam.title }}
            </h2>
            <p class="text-sm text-text-secondary mt-1">{{ exam.description }}</p>
            <div class="flex gap-4 mt-3">
              <span class="text-xs text-text-muted flex items-center gap-1">
                ⏱ {{ exam.duration }}
              </span>
              <span class="text-xs text-text-muted flex items-center gap-1">
                📝 {{ exam.questions }} Fragen
              </span>
            </div>
          </div>
          <div class="text-text-muted group-hover:text-accent transition-colors text-xl">→</div>
        </div>
      </NuxtLink>
    </div>

    <div class="mt-8 p-4 rounded-lg bg-bg-elevated border border-[var(--border)] text-sm text-text-secondary">
      <p class="font-semibold text-text-primary mb-1">💡 Tipp</p>
      <p>Die Prüfungssimulation läuft unter realistischen Bedingungen mit Timer. Beantworte alle Fragen in der vorgegebenen Zeit. Am Ende bekommst du eine Auswertung.</p>
    </div>
  </div>
</template>
