<script setup lang="ts">
import QuestionsMultipleChoice from '~/components/questions/MultipleChoice.vue'
import QuestionsTrueFalse from '~/components/questions/TrueFalse.vue'
import QuestionsFillBlank from '~/components/questions/FillBlank.vue'
import QuestionsSqlEditor from '~/components/questions/SqlEditor.vue'
import QuestionsPseudocode from '~/components/questions/Pseudocode.vue'
import QuestionsMatching from '~/components/questions/Matching.vue'
import QuestionsFlashcard from '~/components/questions/Flashcard.vue'

const { data: nextData, refresh, status } = await useFetch('/api/learn/next')
const { correctAnswer, wrongAnswer } = useFeedback()
const { stats, fetchStats } = useGameState()

const currentQuestion = computed(() => (nextData.value as any)?.[0] ?? null)
const queue = computed(() => (nextData.value as any) ?? [])
const currentIndex = ref(0)
const sessionAnswered = ref(0)
const sessionCorrect = ref(0)
const sessionXp = ref(0)
const showXpPopup = ref(false)
const lastXp = ref(0)
const showSummary = ref(false)
const answering = ref(false)
const waitingForNext = ref(false)

const activeQuestion = computed(() => queue.value[currentIndex.value] ?? null)

const questionComponent = computed(() => {
  if (!activeQuestion.value) return null
  const map: Record<string, Component> = {
    multiple_choice: QuestionsMultipleChoice,
    true_false: QuestionsTrueFalse,
    fill_blank: QuestionsFillBlank,
    sql_editor: QuestionsSqlEditor,
    pseudocode: QuestionsPseudocode,
    matching: QuestionsMatching,
    flashcard: QuestionsFlashcard,
  }
  return map[activeQuestion.value.type] ?? null
})

const progress = computed(() => {
  if (queue.value.length === 0) return 0
  return Math.round((currentIndex.value / queue.value.length) * 100)
})

async function handleAnswer(isCorrect: boolean, givenAnswer: any) {
  if (answering.value) return
  answering.value = true

  sessionAnswered.value++
  if (isCorrect) sessionCorrect.value++

  if (isCorrect) {
    correctAnswer()
  } else {
    wrongAnswer()
  }

  try {
    const result = await $fetch('/api/learn/answer', {
      method: 'POST',
      body: {
        questionId: activeQuestion.value.id,
        isCorrect,
        givenAnswer,
        quality: isCorrect ? 4 : 1,
        responseTimeMs: 0,
      },
    })

    if (result.xpEarned > 0) {
      lastXp.value = result.xpEarned
      sessionXp.value += result.xpEarned
      showXpPopup.value = true
      setTimeout(() => (showXpPopup.value = false), 1500)
    }

    await fetchStats()
  } catch (e) {
    console.error('Fehler beim Speichern:', e)
  }

  waitingForNext.value = true
}

function goToNext() {
  waitingForNext.value = false
  answering.value = false
  if (currentIndex.value < queue.value.length - 1) {
    currentIndex.value++
  } else {
    showSummary.value = true
  }
}

function restart() {
  currentIndex.value = 0
  sessionAnswered.value = 0
  sessionCorrect.value = 0
  sessionXp.value = 0
  showSummary.value = false
  refresh()
}
</script>

<template>
  <div class="max-w-3xl mx-auto py-8 px-4">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-text-primary">Lernmodus</h1>
        <p class="text-sm text-text-secondary mt-1">Fällige Wiederholungen + neue Fragen</p>
      </div>
      <NuxtLink to="/" class="text-sm text-text-muted hover:text-text-secondary transition-colors">
        ← Dashboard
      </NuxtLink>
    </div>

    <!-- Progress Bar -->
    <div class="mb-6">
      <div class="flex justify-between text-xs text-text-muted mb-1">
        <span>Frage {{ currentIndex + 1 }} / {{ queue.length }}</span>
        <span>{{ sessionCorrect }} richtig</span>
      </div>
      <div class="h-2 bg-bg-elevated rounded-full overflow-hidden">
        <div
          class="h-full bg-accent rounded-full transition-all duration-500"
          :style="{ width: progress + '%' }"
        />
      </div>
    </div>

    <!-- XP Popup -->
    <Transition name="float">
      <div
        v-if="showXpPopup"
        class="fixed top-20 right-8 bg-accent/90 text-white px-4 py-2 rounded-lg font-bold text-lg z-50 animate-float-up"
      >
        +{{ lastXp }} XP
      </div>
    </Transition>

    <!-- Loading -->
    <div v-if="status === 'pending'" class="text-center py-20">
      <div class="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      <p class="text-text-muted mt-4 text-sm">Fragen werden geladen...</p>
    </div>

    <!-- Keine Fragen -->
    <div v-else-if="!activeQuestion && !showSummary" class="text-center py-20">
      <div class="text-5xl mb-4">🎉</div>
      <h2 class="text-xl font-bold text-text-primary mb-2">Alles erledigt!</h2>
      <p class="text-text-secondary mb-6">Keine fälligen Wiederholungen. Komm später wieder!</p>
      <NuxtLink
        to="/"
        class="inline-block px-6 py-3 bg-accent hover:bg-accent-bright text-white rounded-lg font-semibold transition-colors"
      >
        Zum Dashboard
      </NuxtLink>
    </div>

    <!-- Zusammenfassung -->
    <div v-else-if="showSummary" class="text-center py-12">
      <div class="text-5xl mb-4">{{ sessionCorrect / sessionAnswered >= 0.8 ? '🏆' : sessionCorrect / sessionAnswered >= 0.5 ? '👍' : '💪' }}</div>
      <h2 class="text-2xl font-bold text-text-primary mb-2">Session beendet!</h2>
      <div class="grid grid-cols-3 gap-4 max-w-sm mx-auto my-6">
        <div class="bg-bg-elevated rounded-lg p-4 border border-[var(--border)]">
          <div class="text-2xl font-bold text-accent">{{ sessionAnswered }}</div>
          <div class="text-xs text-text-muted">Fragen</div>
        </div>
        <div class="bg-bg-elevated rounded-lg p-4 border border-[var(--border)]">
          <div class="text-2xl font-bold text-green-400">{{ Math.round(sessionCorrect / sessionAnswered * 100) }}%</div>
          <div class="text-xs text-text-muted">Richtig</div>
        </div>
        <div class="bg-bg-elevated rounded-lg p-4 border border-[var(--border)]">
          <div class="text-2xl font-bold text-yellow-400">+{{ sessionXp }}</div>
          <div class="text-xs text-text-muted">XP</div>
        </div>
      </div>
      <div class="flex gap-3 justify-center">
        <button
          class="px-6 py-3 bg-accent hover:bg-accent-bright text-white rounded-lg font-semibold transition-colors"
          @click="restart"
        >
          Weiter lernen
        </button>
        <NuxtLink
          to="/"
          class="px-6 py-3 bg-bg-elevated border border-[var(--border)] text-text-secondary rounded-lg font-semibold hover:text-text-primary transition-colors"
        >
          Dashboard
        </NuxtLink>
      </div>
    </div>

    <!-- Aktive Frage -->
    <div v-else>
      <!-- Topic Badge -->
      <div class="mb-4 flex items-center gap-2">
        <span class="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
          {{ activeQuestion.topicName ?? 'Allgemein' }}
        </span>
        <span v-if="activeQuestion.subtopicName" class="text-xs text-text-muted">
          {{ activeQuestion.subtopicName }}
        </span>
        <span
          class="ml-auto text-xs px-2 py-0.5 rounded-full"
          :class="{
            'bg-green-500/10 text-green-400': activeQuestion.difficulty === 'easy',
            'bg-yellow-500/10 text-yellow-400': activeQuestion.difficulty === 'medium',
            'bg-red-500/10 text-red-400': activeQuestion.difficulty === 'hard',
          }"
        >
          {{ activeQuestion.difficulty === 'easy' ? 'Leicht' : activeQuestion.difficulty === 'medium' ? 'Mittel' : 'Schwer' }}
        </span>
      </div>

      <!-- Frage-Text -->
      <div v-if="activeQuestion.type !== 'flashcard'" class="bg-bg-elevated border border-[var(--border)] rounded-xl p-6 mb-6">
        <p class="text-text-primary text-lg leading-relaxed whitespace-pre-wrap">{{ activeQuestion.questionText }}</p>
      </div>

      <!-- Dynamische Komponente -->
      <component
        :is="questionComponent"
        :key="activeQuestion.id"
        :question="activeQuestion"
        @answer="handleAnswer"
      />

      <!-- Erklärung + Weiter-Button nach Antwort -->
      <Transition name="slide-up">
        <div
          v-if="waitingForNext"
          class="mt-4 space-y-4"
        >
          <div
            v-if="activeQuestion.explanation"
            class="p-4 rounded-lg bg-accent/5 border border-accent/20 text-sm text-text-secondary"
          >
            <span class="font-semibold text-accent">Erklärung:</span> {{ activeQuestion.explanation }}
          </div>

          <button
            class="w-full py-3 rounded-lg font-semibold text-sm bg-accent hover:bg-accent-bright text-white transition-all"
            @click="goToNext"
          >
            Weiter →
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.float-enter-active {
  animation: floatUp 0.3s ease-out;
}
.float-leave-active {
  animation: floatUp 0.3s ease-in reverse;
}
@keyframes floatUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.slide-up-enter-active {
  animation: slideUp 0.3s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
