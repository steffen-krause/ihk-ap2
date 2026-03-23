<script setup lang="ts">
import QuestionsMultipleChoice from '~/components/questions/MultipleChoice.vue'
import QuestionsTrueFalse from '~/components/questions/TrueFalse.vue'
import QuestionsFillBlank from '~/components/questions/FillBlank.vue'
import QuestionsSqlEditor from '~/components/questions/SqlEditor.vue'
import QuestionsPseudocode from '~/components/questions/Pseudocode.vue'
import QuestionsMatching from '~/components/questions/Matching.vue'
import QuestionsFlashcard from '~/components/questions/Flashcard.vue'

const route = useRoute()
const router = useRouter()
const examType = route.params.type as string

const examConfig: Record<string, { title: string; durationMin: number; count: number }> = {
  exam_ga1: { title: 'GA1 – Fachrichtungsübergreifend', durationMin: 90, count: 20 },
  exam_ga2: { title: 'GA2 – Anwendungsentwicklung', durationMin: 90, count: 20 },
  exam_wiso: { title: 'WiSo', durationMin: 60, count: 25 },
}

const config = examConfig[examType]
if (!config) {
  throw createError({ statusCode: 404, message: 'Unbekannter Prüfungstyp' })
}

// States
const phase = ref<'start' | 'running' | 'finished'>('start')
const sessionId = ref<number | null>(null)
const questions = ref<any[]>([])
const currentIndex = ref(0)
const answers = ref<Map<number, { isCorrect: boolean; givenAnswer: any }>>(new Map())
const flagged = ref<Set<number>>(new Set())
const timeLeft = ref(config.durationMin * 60)
const timerInterval = ref<ReturnType<typeof setInterval> | null>(null)
const submitting = ref(false)
const result = ref<any>(null)
const showUmlSyntax = ref(false)

const activeQuestion = computed(() => questions.value[currentIndex.value] ?? null)

const isUmlQuestion = computed(() => activeQuestion.value?.topicSlug === 'uml')

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

const timeFormatted = computed(() => {
  const m = Math.floor(timeLeft.value / 60)
  const s = timeLeft.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

const timePercent = computed(() => (timeLeft.value / (config.durationMin * 60)) * 100)
const answeredCount = computed(() => answers.value.size)

async function startExam() {
  try {
    const data = await $fetch('/api/exam/start', {
      method: 'POST',
      body: { type: examType },
    })
    sessionId.value = data.sessionId
    questions.value = data.questions
    phase.value = 'running'

    timerInterval.value = setInterval(() => {
      timeLeft.value--
      if (timeLeft.value <= 0) {
        submitExam()
      }
    }, 1000)
  } catch (e) {
    console.error('Fehler beim Starten:', e)
  }
}

function handleAnswer(isCorrect: boolean, givenAnswer: any) {
  if (!activeQuestion.value) return
  answers.value.set(activeQuestion.value.id, { isCorrect, givenAnswer })
}

function toggleFlag() {
  if (!activeQuestion.value) return
  const id = activeQuestion.value.id
  if (flagged.value.has(id)) {
    flagged.value.delete(id)
  } else {
    flagged.value.add(id)
  }
}

function goTo(index: number) {
  currentIndex.value = index
}

function next() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

async function submitExam() {
  if (submitting.value) return
  submitting.value = true

  if (timerInterval.value) {
    clearInterval(timerInterval.value)
  }

  const answerList = questions.value.map((q) => {
    const a = answers.value.get(q.id)
    return {
      questionId: q.id,
      isCorrect: a?.isCorrect ?? false,
      givenAnswer: a?.givenAnswer ?? null,
    }
  })

  try {
    result.value = await $fetch('/api/exam/submit', {
      method: 'POST',
      body: {
        sessionId: sessionId.value,
        answers: answerList,
      },
    })
    phase.value = 'finished'
  } catch (e) {
    console.error('Fehler beim Abgeben:', e)
    submitting.value = false
  }
}

onBeforeUnmount(() => {
  if (timerInterval.value) clearInterval(timerInterval.value)
})
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <!-- Start Screen -->
    <div v-if="phase === 'start'" class="text-center py-16">
      <div class="text-5xl mb-4">📝</div>
      <h1 class="text-2xl font-bold text-text-primary mb-2">{{ config.title }}</h1>
      <p class="text-text-secondary mb-8">
        {{ config.count }} Fragen · {{ config.durationMin }} Minuten
      </p>
      <div class="max-w-md mx-auto mb-8 p-4 rounded-lg bg-bg-elevated border border-[var(--border)] text-sm text-text-secondary text-left space-y-2">
        <p>⏱ Timer startet sofort nach Beginn</p>
        <p>🔖 Du kannst Fragen markieren und später zurückkehren</p>
        <p>📊 Am Ende bekommst du eine detaillierte Auswertung</p>
      </div>
      <button
        class="px-8 py-3 bg-accent hover:bg-accent-bright text-white rounded-lg font-bold text-lg transition-colors"
        @click="startExam"
      >
        Prüfung starten
      </button>
    </div>

    <!-- Running -->
    <div v-else-if="phase === 'running'">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-lg font-bold text-text-primary">{{ config.title }}</h1>
        <div class="flex items-center gap-4">
          <div
            class="text-lg font-mono font-bold"
            :class="timeLeft <= 300 ? 'text-red-400 animate-pulse' : 'text-text-primary'"
          >
            {{ timeFormatted }}
          </div>
          <button
            class="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm font-semibold hover:bg-red-500/20 transition-colors"
            @click="submitExam"
          >
            Abgeben
          </button>
        </div>
      </div>

      <!-- Timer Bar -->
      <div class="h-1 bg-bg-elevated rounded-full mb-4 overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-1000"
          :class="timeLeft <= 300 ? 'bg-red-500' : 'bg-accent'"
          :style="{ width: timePercent + '%' }"
        />
      </div>

      <!-- Question Navigator -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <button
          v-for="(q, i) in questions"
          :key="q.id"
          class="w-8 h-8 rounded text-xs font-semibold transition-all"
          :class="{
            'bg-accent text-white': i === currentIndex,
            'bg-green-500/20 text-green-400 border border-green-500/30': i !== currentIndex && answers.has(q.id),
            'bg-bg-elevated text-text-muted border border-[var(--border)]': i !== currentIndex && !answers.has(q.id),
            'ring-2 ring-yellow-500/50': flagged.has(q.id),
          }"
          @click="goTo(i)"
        >
          {{ i + 1 }}
        </button>
      </div>

      <!-- Question -->
      <div v-if="activeQuestion" class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-text-muted">Frage {{ currentIndex + 1 }} / {{ questions.length }}</span>
          <button
            class="text-sm px-3 py-1 rounded-lg transition-colors"
            :class="flagged.has(activeQuestion.id) ? 'bg-yellow-500/20 text-yellow-400' : 'text-text-muted hover:text-yellow-400'"
            @click="toggleFlag"
          >
            {{ flagged.has(activeQuestion.id) ? '🔖 Markiert' : '🔖 Markieren' }}
          </button>
        </div>

        <!-- UML Syntaxhilfe (wie IHK-Anhang) -->
        <div v-if="isUmlQuestion" class="rounded-lg border border-[var(--border)] bg-bg-elevated overflow-hidden mb-4">
          <button
            class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-text-muted hover:text-text-secondary transition-colors"
            @click="showUmlSyntax = !showUmlSyntax"
          >
            <span>📎 UML-Syntaxhilfe (Anhang)</span>
            <span class="transition-transform" :class="{ 'rotate-180': showUmlSyntax }">▼</span>
          </button>
          <Transition name="collapse">
            <div v-if="showUmlSyntax" class="px-4 pb-4 text-xs text-text-secondary space-y-3 border-t border-[var(--border)] pt-3">
              <div>
                <p class="text-text-muted font-semibold mb-1">Sichtbarkeiten</p>
                <div class="font-mono space-y-0.5">
                  <p><span class="text-green-400">+</span> public &nbsp; <span class="text-red-400">-</span> private &nbsp; <span class="text-yellow-400">#</span> protected &nbsp; <span class="text-blue-400">~</span> package</p>
                </div>
              </div>
              <div>
                <p class="text-text-muted font-semibold mb-1">Beziehungen (Klassendiagramm)</p>
                <div class="space-y-0.5">
                  <p>━━▷ Vererbung (leeres Dreieck, durchgezogen)</p>
                  <p>╌╌▷ Realisierung / Interface (leeres Dreieck, gestrichelt)</p>
                  <p>━━◆ Komposition (ausgefüllte Raute) – Teil kann NICHT ohne Ganzes existieren</p>
                  <p>━━◇ Aggregation (leere Raute) – Teil kann unabhängig existieren</p>
                  <p>━━→ Gerichtete Assoziation</p>
                  <p>╌╌→ Abhängigkeit (Dependency)</p>
                </div>
              </div>
              <div>
                <p class="text-text-muted font-semibold mb-1">Multiplizitäten</p>
                <div class="font-mono space-y-0.5">
                  <p>1 &nbsp; genau eins &nbsp;│&nbsp; 0..1 &nbsp; optional &nbsp;│&nbsp; * &nbsp; beliebig viele &nbsp;│&nbsp; 1..* &nbsp; mindestens eins</p>
                </div>
              </div>
              <div>
                <p class="text-text-muted font-semibold mb-1">Use-Case-Diagramm</p>
                <div class="space-y-0.5">
                  <p>╌╌→ &lt;&lt;include&gt;&gt; – wird IMMER eingebunden (zwingend)</p>
                  <p>╌╌→ &lt;&lt;extend&gt;&gt; – wird NUR unter bestimmten Bedingungen ausgeführt (optional)</p>
                  <p>Strichmännchen = Akteur &nbsp;│&nbsp; Ellipse = Use Case &nbsp;│&nbsp; Systemgrenze = Rahmen</p>
                </div>
              </div>
              <div>
                <p class="text-text-muted font-semibold mb-1">Aktivitätsdiagramm</p>
                <div class="space-y-0.5">
                  <p>● Startknoten &nbsp;│&nbsp; ◉ Endknoten &nbsp;│&nbsp; ◇ Entscheidung/Merge</p>
                  <p>▬ Fork/Join (Parallelisierung) &nbsp;│&nbsp; ▭ Aktion (abgerundetes Rechteck)</p>
                </div>
              </div>
              <div>
                <p class="text-text-muted font-semibold mb-1">Sequenzdiagramm</p>
                <div class="space-y-0.5">
                  <p>━━→ Synchrone Nachricht &nbsp;│&nbsp; ╌╌→ Antwortnachricht</p>
                  <p>Senkrechtes Rechteck = Aktivierung/Lebenszeitbalken</p>
                  <p>alt / opt / loop / break = Interaktionsfragmente</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <div v-if="activeQuestion.type !== 'flashcard'" class="bg-bg-elevated border border-[var(--border)] rounded-xl p-6 mb-6">
          <p class="text-text-primary text-lg leading-relaxed whitespace-pre-wrap">{{ activeQuestion.questionText }}</p>
        </div>

        <component
          :is="questionComponent"
          :key="activeQuestion.id"
          :question="activeQuestion"
          @answer="handleAnswer"
        />
      </div>

      <!-- Navigation -->
      <div class="flex justify-between mt-6">
        <button
          class="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          :class="currentIndex > 0 ? 'bg-bg-elevated text-text-secondary hover:text-text-primary border border-[var(--border)]' : 'text-text-muted cursor-not-allowed'"
          :disabled="currentIndex === 0"
          @click="prev"
        >
          ← Zurück
        </button>

        <span class="text-sm text-text-muted self-center">{{ answeredCount }} / {{ questions.length }} beantwortet</span>

        <button
          v-if="currentIndex < questions.length - 1"
          class="px-4 py-2 bg-accent hover:bg-accent-bright text-white rounded-lg text-sm font-semibold transition-colors"
          @click="next"
        >
          Weiter →
        </button>
        <button
          v-else
          class="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-semibold transition-colors"
          @click="submitExam"
        >
          Abgeben ✓
        </button>
      </div>
    </div>

    <!-- Result -->
    <div v-else-if="phase === 'finished'" class="text-center py-12">
      <div class="text-5xl mb-4">{{ result?.score >= 80 ? '🏆' : result?.score >= 50 ? '✅' : '📚' }}</div>
      <h1 class="text-2xl font-bold text-text-primary mb-2">Prüfung beendet!</h1>
      <p class="text-text-secondary mb-8">{{ config.title }}</p>

      <div class="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
        <div class="bg-bg-elevated rounded-xl p-6 border border-[var(--border)]">
          <div class="text-3xl font-bold" :class="result?.score >= 50 ? 'text-green-400' : 'text-red-400'">
            {{ result?.score ?? 0 }}%
          </div>
          <div class="text-xs text-text-muted mt-1">Ergebnis</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-6 border border-[var(--border)]">
          <div class="text-3xl font-bold text-accent">{{ result?.correct ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">Richtig</div>
        </div>
        <div class="bg-bg-elevated rounded-xl p-6 border border-[var(--border)]">
          <div class="text-3xl font-bold text-yellow-400">+{{ result?.xpEarned ?? 0 }}</div>
          <div class="text-xs text-text-muted mt-1">XP</div>
        </div>
      </div>

      <div
        class="max-w-lg mx-auto mb-8 p-4 rounded-lg text-sm"
        :class="result?.score >= 50 ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'"
      >
        {{ result?.score >= 80 ? 'Ausgezeichnet! Du bist bestens vorbereitet.' : result?.score >= 50 ? 'Bestanden! Aber es gibt noch Verbesserungspotenzial.' : 'Nicht bestanden. Wiederhole die schwachen Themen und versuche es erneut.' }}
      </div>

      <div class="flex gap-3 justify-center">
        <NuxtLink
          to="/exam"
          class="px-6 py-3 bg-accent hover:bg-accent-bright text-white rounded-lg font-semibold transition-colors"
        >
          Neue Prüfung
        </NuxtLink>
        <NuxtLink
          to="/"
          class="px-6 py-3 bg-bg-elevated border border-[var(--border)] text-text-secondary rounded-lg font-semibold hover:text-text-primary transition-colors"
        >
          Dashboard
        </NuxtLink>
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
  max-height: 800px;
}
</style>
