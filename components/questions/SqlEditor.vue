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

const showSyntax = ref(false)

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
    <!-- SQL Syntaxhilfe (wie IHK-Anhang) -->
    <div class="rounded-lg border border-[var(--border)] bg-bg-elevated overflow-hidden">
      <button
        class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-text-muted hover:text-text-secondary transition-colors"
        @click="showSyntax = !showSyntax"
      >
        <span>📎 SQL-Syntaxhilfe (Anhang)</span>
        <span class="transition-transform" :class="{ 'rotate-180': showSyntax }">▼</span>
      </button>
      <Transition name="collapse">
        <div v-if="showSyntax" class="px-4 pb-4 text-xs font-mono text-text-secondary space-y-3 border-t border-[var(--border)] pt-3">
          <div>
            <p class="text-text-muted font-semibold mb-1 font-sans">Abfragen</p>
            <pre class="whitespace-pre-wrap">SELECT [DISTINCT] &lt;spalte(n)&gt; | *
FROM &lt;tabelle(n)&gt;
[WHERE &lt;bedingung&gt;]
[GROUP BY &lt;spalte(n)&gt;]
[HAVING &lt;bedingung&gt;]
[ORDER BY &lt;spalte&gt; [ASC | DESC]]
[LIMIT &lt;n&gt;]</pre>
          </div>
          <div>
            <p class="text-text-muted font-semibold mb-1 font-sans">JOINs</p>
            <pre class="whitespace-pre-wrap">[INNER] JOIN &lt;tabelle&gt; ON &lt;bedingung&gt;
LEFT [OUTER] JOIN &lt;tabelle&gt; ON &lt;bedingung&gt;
RIGHT [OUTER] JOIN &lt;tabelle&gt; ON &lt;bedingung&gt;
CROSS JOIN &lt;tabelle&gt;</pre>
          </div>
          <div>
            <p class="text-text-muted font-semibold mb-1 font-sans">Datenmanipulation</p>
            <pre class="whitespace-pre-wrap">INSERT INTO &lt;tabelle&gt; (&lt;spalten&gt;) VALUES (&lt;werte&gt;)
UPDATE &lt;tabelle&gt; SET &lt;spalte&gt; = &lt;wert&gt; [WHERE &lt;bed.&gt;]
DELETE FROM &lt;tabelle&gt; [WHERE &lt;bedingung&gt;]</pre>
          </div>
          <div>
            <p class="text-text-muted font-semibold mb-1 font-sans">Tabellenstruktur</p>
            <pre class="whitespace-pre-wrap">CREATE TABLE &lt;name&gt; (&lt;spalte&gt; &lt;datentyp&gt; [constraints], ...)
ALTER TABLE &lt;name&gt; ADD | DROP | MODIFY &lt;spalte&gt;
DROP TABLE &lt;name&gt;</pre>
          </div>
          <div>
            <p class="text-text-muted font-semibold mb-1 font-sans">Aggregatfunktionen</p>
            <pre class="whitespace-pre-wrap">COUNT(&lt;spalte&gt; | *), SUM(&lt;spalte&gt;), AVG(&lt;spalte&gt;)
MIN(&lt;spalte&gt;), MAX(&lt;spalte&gt;)</pre>
          </div>
          <div>
            <p class="text-text-muted font-semibold mb-1 font-sans">Operatoren</p>
            <pre class="whitespace-pre-wrap">AND, OR, NOT, IN (&lt;werte&gt;), BETWEEN &lt;a&gt; AND &lt;b&gt;
LIKE '%muster%', IS [NOT] NULL, EXISTS (&lt;subquery&gt;)</pre>
          </div>
        </div>
      </Transition>
    </div>

    <div v-if="data?.hints" class="text-xs text-text-muted p-3 rounded-lg bg-bg-elevated border border-[var(--border)]">
      💡 Hinweis: {{ data.hints }}
    </div>

    <textarea
      v-model="userInput"
      class="w-full h-48 p-4 rounded-lg bg-bg-elevated border border-[var(--border)] text-sm font-mono resize-none focus:outline-none focus:border-accent transition-colors"
      placeholder="Schreibe dein SQL hier..."
      :disabled="submitted"
    />

    <button
      v-if="!submitted"
      class="w-full py-3 rounded-lg font-semibold text-sm bg-accent hover:bg-accent-bright text-white transition-all"
      @click="showSolution"
    >
      Lösung anzeigen
    </button>

    <!-- Solution -->
    <div v-if="submitted" class="space-y-4">
      <div class="p-4 rounded-lg bg-bg-elevated border border-green-500/30">
        <p class="text-xs text-green-400 font-semibold mb-2">Musterlösung:</p>
        <pre class="text-sm font-mono text-text-primary whitespace-pre-wrap">{{ data?.solution }}</pre>
      </div>

      <!-- Self rating -->
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

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.collapse-enter-to,
.collapse-leave-from {
  opacity: 1;
  max-height: 600px;
}
</style>
