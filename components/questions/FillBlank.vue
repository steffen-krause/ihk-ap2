<script setup lang="ts">
const props = defineProps<{
  question: any
}>()

const emit = defineEmits<{
  answer: [isCorrect: boolean, givenAnswer: any]
}>()

const data = computed(() => props.question.questionData as any)
const expectedAnswers = computed<string[]>(() => data.value?.expectedAnswers ?? [])
const userAnswers = ref<string[]>(expectedAnswers.value.map(() => ''))
const submitted = ref(false)
const results = ref<boolean[]>([])

// Split template text by [BLANK] markers
const parts = computed(() => {
  const template: string = data.value?.template ?? ''
  return template.split(/\[BLANK\]/i)
})

function submit() {
  submitted.value = true
  results.value = expectedAnswers.value.map((expected, i) => {
    const user = userAnswers.value[i]?.trim().toLowerCase() ?? ''
    return user === expected.trim().toLowerCase()
  })
  const allCorrect = results.value.every(Boolean)
  emit('answer', allCorrect, { userAnswers: userAnswers.value })
}
</script>

<template>
  <div class="space-y-4">
    <div class="p-5 rounded-lg bg-bg-elevated border border-[var(--border)] text-sm leading-relaxed">
      <template v-for="(part, i) in parts" :key="i">
        <span>{{ part }}</span>
        <template v-if="i < expectedAnswers.length">
          <input
            v-if="!submitted"
            v-model="userAnswers[i]"
            type="text"
            class="inline-block w-32 mx-1 px-2 py-1 rounded bg-bg-primary border border-accent/40 text-sm font-mono text-center focus:outline-none focus:border-accent"
            :placeholder="`Lücke ${i + 1}`"
          />
          <span
            v-else
            class="inline-block mx-1 px-2 py-1 rounded font-mono text-sm font-medium"
            :class="results[i] ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'"
          >
            {{ userAnswers[i] || '—' }}
            <span v-if="!results[i]" class="text-green-400 ml-1">({{ expectedAnswers[i] }})</span>
          </span>
        </template>
      </template>
    </div>

    <button
      v-if="!submitted"
      class="w-full py-3 rounded-lg font-semibold text-sm bg-accent hover:bg-accent-bright text-white transition-all"
      @click="submit"
    >
      Antwort prüfen
    </button>
  </div>
</template>
