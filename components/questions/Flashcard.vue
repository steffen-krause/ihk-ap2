<script setup lang="ts">
const props = defineProps<{
  question: any
}>()

const emit = defineEmits<{
  answer: [isCorrect: boolean, givenAnswer: any]
}>()

const data = computed(() => props.question.questionData as any)
const flipped = ref(false)
const rated = ref(false)

function flip() {
  flipped.value = !flipped.value
}

function rate(quality: 'again' | 'hard' | 'good' | 'easy') {
  rated.value = true
  const qualityMap: Record<string, boolean> = { again: false, hard: false, good: true, easy: true }
  emit('answer', qualityMap[quality], { confidence: quality })
}
</script>

<template>
  <div class="space-y-4">
    <div
      class="w-full min-h-[200px] cursor-pointer perspective-1000"
      @click="flip"
    >
      <div
        class="grid w-full min-h-[200px] transition-transform duration-500 transform-style-preserve-3d"
        :class="{ 'rotate-y-180': flipped }"
      >
        <!-- Vorderseite -->
        <div class="card-face backface-hidden rounded-xl border border-[var(--border)] bg-bg-elevated p-6 flex flex-col items-center justify-center text-center">
          <span class="text-xs text-text-muted uppercase tracking-wider mb-3">Frage</span>
          <p class="text-lg text-text-primary">{{ question.questionText }}</p>
          <span class="mt-4 text-xs text-text-muted">Klicken zum Umdrehen →</span>
        </div>

        <!-- Rückseite -->
        <div class="card-face backface-hidden rotate-y-180 rounded-xl border border-accent/30 bg-bg-elevated p-6 flex flex-col items-center justify-center text-center">
          <span class="text-xs text-accent uppercase tracking-wider mb-3">Antwort</span>
          <p class="text-lg text-text-primary whitespace-pre-wrap">{{ data?.answer }}</p>
        </div>
      </div>
    </div>

    <div v-if="flipped && !rated" class="space-y-2">
      <p class="text-sm text-text-secondary text-center">Wie gut konntest du die Antwort?</p>
      <div class="grid grid-cols-4 gap-2">
        <button
          class="py-2 px-3 rounded-lg text-xs font-semibold bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors"
          @click="rate('again')"
        >
          Nochmal
        </button>
        <button
          class="py-2 px-3 rounded-lg text-xs font-semibold bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 transition-colors"
          @click="rate('hard')"
        >
          Schwer
        </button>
        <button
          class="py-2 px-3 rounded-lg text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-colors"
          @click="rate('good')"
        >
          Gut
        </button>
        <button
          class="py-2 px-3 rounded-lg text-xs font-semibold bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-colors"
          @click="rate('easy')"
        >
          Leicht
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-preserve-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.card-face {
  grid-area: 1 / 1;
}
</style>
