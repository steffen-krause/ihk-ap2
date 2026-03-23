const EXAM_DATE = new Date('2026-04-28T08:00:00')
const START_DATE = new Date('2026-03-23T00:00:00')
const TOTAL_PREP_MS = EXAM_DATE.getTime() - START_DATE.getTime()

export function useExamCountdown() {
  const now = useNow({ interval: 60_000 }) // update every minute

  const daysLeft = computed(() => {
    const diff = EXAM_DATE.getTime() - now.value.getTime()
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  })

  const hoursLeft = computed(() => {
    const diff = EXAM_DATE.getTime() - now.value.getTime()
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60)))
  })

  const timeProgress = computed(() => {
    const elapsed = now.value.getTime() - START_DATE.getTime()
    return Math.min(100, Math.max(0, (elapsed / TOTAL_PREP_MS) * 100))
  })

  const urgency = computed<'relaxed' | 'normal' | 'pressing' | 'critical'>(() => {
    const d = daysLeft.value
    if (d > 60) return 'relaxed'
    if (d > 30) return 'normal'
    if (d > 14) return 'pressing'
    return 'critical'
  })

  const urgencyColor = computed(() => {
    const map = {
      relaxed: 'text-green-400',
      normal: 'text-blue-400',
      pressing: 'text-yellow-400',
      critical: 'text-red-400',
    }
    return map[urgency.value]
  })

  const urgencyBg = computed(() => {
    const map = {
      relaxed: 'bg-green-400',
      normal: 'bg-blue-400',
      pressing: 'bg-yellow-400',
      critical: 'bg-red-400',
    }
    return map[urgency.value]
  })

  const isExamOver = computed(() => daysLeft.value === 0)

  return { daysLeft, hoursLeft, timeProgress, urgency, urgencyColor, urgencyBg, isExamOver, EXAM_DATE }
}
