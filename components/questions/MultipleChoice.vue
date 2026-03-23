<script setup lang="ts">
const props = defineProps<{
  question: any
}>()

const emit = defineEmits<{
  answer: [isCorrect: boolean, givenAnswer: any]
}>()

const selected = ref<number | null>(null)
const submitted = ref(false)
const data = computed(() => props.question.questionData as any)
const options = computed(() => data.value?.options ?? [])
const correctIndex = computed(() => data.value?.correctIndex ?? -1)

function submit() {
  if (selected.value === null) return
  submitted.value = true
  const isCorrect = selected.value === correctIndex.value
  emit('answer', isCorrect, { selectedIndex: selected.value })
}
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="(opt, i) in options"
      :key="i"
      class="flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200"
      :class="{
        'border-[var(--border)] bg-bg-elevated hover:bg-bg-hover': !submitted && selected !== i,
        'border-accent bg-accent/10': !submitted && selected === i,
        'border-green-500 bg-green-500/10': submitted && i === correctIndex,
        'border-red-500 bg-red-500/10': submitted && selected === i && i !== correctIndex,
        'border-[var(--border)] bg-bg-elevated opacity-50': submitted && i !== correctIndex && selected !== i,
        'pointer-events-none': submitted,
      }"
      @click="!submitted && (selected = i)"
    >
      <div
        class="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors"
        :class="{
          'border-text-muted': !submitted && selected !== i,
          'border-accent bg-accent': !submitted && selected === i,
          'border-green-500 bg-green-500': submitted && i === correctIndex,
          'border-red-500 bg-red-500': submitted && selected === i && i !== correctIndex,
        }"
      >
        <div v-if="selected === i || (submitted && i === correctIndex)" class="w-2.5 h-2.5 rounded-full bg-white" />
      </div>
      <span class="text-sm" :class="{ 'font-medium': selected === i }">{{ opt }}</span>
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
