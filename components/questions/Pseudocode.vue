<script setup lang="ts">
const props = defineProps<{
  question: any
}>()

const emit = defineEmits<{
  answer: [isCorrect: boolean, givenAnswer: any]
}>()

const userInput = ref('')
const submitted = ref(false)
const selfRating = ref<'correct' | 'partial' | 'wrong' | null>(null)
const data = computed(() => props.question.questionData as any)

function showSolution() {
  submitted.value = true
}

function rateSelf(rating: 'correct' | 'partial' | 'wrong') {
  selfRating.value = rating
  const isCorrect = rating === 'correct'
  emit('answer', isCorrect, { userInput: userInput.value, selfRating: rating })
}
</script>

<template>
  <div class="space-y-4">
    <div v-if="data?.hints" class="text-xs text-text-muted p-3 rounded-lg bg-bg-elevated border border-[var(--border)]">
      💡 Hinweis: {{ data.hints }}
    </div>

    <textarea
      v-model="userInput"
      class="w-full h-56 p-4 rounded-lg bg-bg-elevated border border-[var(--border)] text-sm font-mono resize-none focus:outline-none focus:border-accent transition-colors"
      placeholder="Schreibe deinen Pseudocode hier..."
      :disabled="submitted"
    />

    <button
      v-if="!submitted"
      class="w-full py-3 rounded-lg font-semibold text-sm bg-accent hover:bg-accent-bright text-white transition-all"
      @click="showSolution"
    >
      Lösung anzeigen
    </button>

    <div v-if="submitted" class="space-y-4">
      <div class="p-4 rounded-lg bg-bg-elevated border border-green-500/30">
        <p class="text-xs text-green-400 font-semibold mb-2">Musterlösung:</p>
        <pre class="text-sm font-mono text-text-primary whitespace-pre-wrap">{{ data?.solution }}</pre>
      </div>

      <div v-if="!selfRating" class="space-y-2">
        <p class="text-sm text-text-secondary text-center">Wie war deine Antwort?</p>
        <div class="grid grid-cols-3 gap-3">
          <button
            class="py-2.5 rounded-lg text-sm font-medium border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
            @click="rateSelf('correct')"
          >
            ✅ Richtig
          </button>
          <button
            class="py-2.5 rounded-lg text-sm font-medium border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 transition-colors"
            @click="rateSelf('partial')"
          >
            🟡 Teilweise
          </button>
          <button
            class="py-2.5 rounded-lg text-sm font-medium border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
            @click="rateSelf('wrong')"
          >
            ❌ Falsch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
