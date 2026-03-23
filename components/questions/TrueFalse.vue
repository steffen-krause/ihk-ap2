<script setup lang="ts">
const props = defineProps<{
  question: any
}>()

const emit = defineEmits<{
  answer: [isCorrect: boolean, givenAnswer: any]
}>()

const data = computed(() => props.question.questionData as any)
const selected = ref<boolean | null>(null)
const submitted = ref(false)

function submit() {
  if (selected.value === null) return
  submitted.value = true
  const isCorrect = selected.value === (data.value?.isTrue ?? true)
  emit('answer', isCorrect, { answer: selected.value })
}
</script>

<template>
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <button
        class="p-4 rounded-lg border text-sm font-semibold transition-all"
        :class="{
          'border-[var(--border)] bg-bg-elevated hover:bg-bg-hover': !submitted && selected !== true,
          'border-green-500 bg-green-500/10 text-green-400': !submitted && selected === true,
          'border-green-500 bg-green-500/10 text-green-400': submitted && data?.isTrue === true,
          'border-red-500 bg-red-500/10 text-red-400': submitted && selected === true && data?.isTrue !== true,
          'pointer-events-none': submitted,
        }"
        @click="!submitted && (selected = true)"
      >
        ✓ Wahr
      </button>
      <button
        class="p-4 rounded-lg border text-sm font-semibold transition-all"
        :class="{
          'border-[var(--border)] bg-bg-elevated hover:bg-bg-hover': !submitted && selected !== false,
          'border-red-500 bg-red-500/10 text-red-400': !submitted && selected === false,
          'border-green-500 bg-green-500/10 text-green-400': submitted && data?.isTrue === false,
          'border-red-500 bg-red-500/10 text-red-400': submitted && selected === false && data?.isTrue !== false,
          'pointer-events-none': submitted,
        }"
        @click="!submitted && (selected = false)"
      >
        ✗ Falsch
      </button>
    </div>

    <div v-if="submitted && data?.explanation" class="p-4 rounded-lg bg-bg-elevated border border-[var(--border)] text-sm text-text-secondary">
      {{ data.explanation }}
    </div>

    <button
      v-if="!submitted"
      class="w-full py-3 rounded-lg font-semibold text-sm transition-all"
      :class="
        selected !== null
          ? 'bg-accent hover:bg-accent-bright text-white'
          : 'bg-bg-elevated text-text-muted cursor-not-allowed'
      "
      :disabled="selected === null"
      @click="submit"
    >
      Antwort prüfen
    </button>
  </div>
</template>
