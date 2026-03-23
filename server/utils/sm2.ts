/**
 * SM-2 Spaced Repetition Algorithm
 * Based on: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
 */

export interface SM2Input {
  easinessFactor: number
  interval: number
  repetitions: number
  quality: number // 0-5
}

export interface SM2Output {
  easinessFactor: number
  interval: number
  repetitions: number
  nextReviewDate: string // ISO date string
}

export function calculateSM2(input: SM2Input): SM2Output {
  const { quality, easinessFactor: prevEF, interval: prevInterval, repetitions: prevReps } = input

  let newEF = prevEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  if (newEF < 1.3) newEF = 1.3

  let newInterval: number
  let newReps: number

  if (quality >= 3) {
    // Successful recall
    newReps = prevReps + 1
    if (newReps === 1) {
      newInterval = 1
    } else if (newReps === 2) {
      newInterval = 6
    } else {
      newInterval = Math.round(prevInterval * newEF)
    }
  } else {
    // Failed recall — reset
    newReps = 0
    newInterval = 1
  }

  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + newInterval)

  return {
    easinessFactor: Math.round(newEF * 100) / 100,
    interval: newInterval,
    repetitions: newReps,
    nextReviewDate: nextDate.toISOString().split('T')[0],
  }
}

/**
 * Maps user-facing confidence ratings to SM-2 quality scores
 */
export function mapConfidenceToQuality(confidence: 'again' | 'hard' | 'good' | 'easy'): number {
  const map: Record<string, number> = {
    again: 0,
    hard: 2,
    good: 4,
    easy: 5,
  }
  return map[confidence] ?? 3
}
