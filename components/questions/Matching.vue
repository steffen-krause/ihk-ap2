<script setup lang="ts">
const props = defineProps<{
  question: any
}>()

const emit = defineEmits<{
  answer: [isCorrect: boolean, givenAnswer: any]
}>()

const data = computed(() => props.question.questionData as any)
const pairs = computed<Array<{ left: string; right: string }>>(() => data.value?.pairs ?? [])

// Shuffle right side
const shuffledRight = ref<Array<{ text: string; originalIndex: number }>>([])
const userMatches = ref<Map<number, number>>(new Map()) // leftIndex → rightIndex
const selectedLeft = ref<number | null>(null)
const submitted = ref(false)
const results = ref<boolean[]>([])

onMounted(() => {
  const items = pairs.value.map((p, i) => ({ text: p.right, originalIndex: i }))
  // Fisher-Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  shuffledRight.value = items
})

function selectLeft(i: number) {
  if (submitted.value) return
  selectedLeft.value = i
}

function selectRight(i: number) {
  if (submitted.value || selectedLeft.value === null) return
  // Remove any existing match for this left
  userMatches.value.set(selectedLeft.value, i)
  selectedLeft.value = null
}

function getMatchedRight(leftIndex: number): string | null {
  const rightIdx = userMatches.value.get(leftIndex)
  if (rightIdx === undefined) return null
  return shuffledRight.value[rightIdx]?.text ?? null
}

function isRightMatched(rightIndex: number): boolean {
  for (const v of userMatches.value.values()) {
    if (v === rightIndex) return true
  }
  return false
}

function submit() {
  submitted.value = true
  results.value = pairs.value.map((p, i) => {
    const rightIdx = userMatches.value.get(i)
    if (rightIdx === undefined) return false
    return shuffledRight.value[rightIdx]?.originalIndex === i
  })
  const allCorrect = results.value.every(Boolean)
  emit('answer', allCorrect, { matches: Object.fromEntries(userMatches.value) })
}
</script>

<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-6">
      <!-- Left column -->
      <div class="space-y-2">
        <p class="text-xs text-text-muted uppercase tracking-wider mb-2">Begriff</p>
        <div
          v-for="(pair, i) in pairs"
          :key="'l' + i"
          class="p-3 rounded-lg border text-sm cursor-pointer transition-all"
          :class="{
            'border-accent bg-accent/10': selectedLeft === i,
            'border-[var(--border)] bg-bg-elevated hover:bg-bg-hover': selectedLeft !== i && !submitted,
            'border-green-500/50 bg-green-500/10': submitted && results[i],
            'border-red-500/50 bg-red-500/10': submitted && !results[i],
          }"
          @click="selectLeft(i)"
        >
          <span>{{ pair.left }}</span>
          <span v-if="getMatchedRight(i)" class="ml-2 text-xs text-accent-bright">→ {{ getMatchedRight(i) }}</span>
        </div>
      </div>

      <!-- Right column -->
      <div class="space-y-2">
        <p class="text-xs text-text-muted uppercase tracking-wider mb-2">Zuordnung</p>
        <div
          v-for="(item, i) in shuffledRight"
          :key="'r' + i"
          class="p-3 rounded-lg border text-sm cursor-pointer transition-all"
          :class="{
            'border-[var(--border)] bg-bg-elevated': !isRightMatched(i) && !submitted,
            'border-accent/50 bg-accent/5': isRightMatched(i) && !submitted,
            'opacity-50': submitted && isRightMatched(i),
            'hover:bg-bg-hover': selectedLeft !== null && !submitted,
          }"
          @click="selectRight(i)"
        >
          {{ item.text }}
        </div>
      </div>
    </div>

    <!-- Show correct pairs on submit -->
    <div v-if="submitted" class="p-4 rounded-lg bg-bg-elevated border border-[var(--border)]">
      <p class="text-xs text-text-muted mb-2">Korrekte Zuordnung:</p>
      <div v-for="(pair, i) in pairs" :key="'sol' + i" class="text-sm py-1">
        <span :class="results[i] ? 'text-green-400' : 'text-red-400'">
          {{ results[i] ? '✓' : '✗' }}
        </span>
        {{ pair.left }} → {{ pair.right }}
      </div>
    </div>

    <button
      v-if="!submitted"
      class="w-full py-3 rounded-lg font-semibold text-sm transition-all"
      :class="
        userMatches.size === pairs.length
          ? 'bg-accent hover:bg-accent-bright text-white'
          : 'bg-bg-elevated text-text-muted cursor-not-allowed'
      "
      :disabled="userMatches.size !== pairs.length"
      @click="submit"
    >
      Antwort prüfen
    </button>
  </div>
</template>
