/**
 * Topic Performance Tracking
 */

type MasteryLevel = 'not_started' | 'beginner' | 'learning' | 'familiar' | 'mastered'
type Trend = 'improving' | 'stable' | 'declining'

/**
 * Calculate mastery level from attempts and accuracy
 */
export function calculateMastery(totalAttempts: number, accuracyRate: number): MasteryLevel {
  if (totalAttempts === 0) return 'not_started'
  if (totalAttempts < 10 || accuracyRate < 0.4) return 'beginner'
  if (accuracyRate < 0.6) return 'learning'
  if (totalAttempts < 20 || accuracyRate < 0.8) return 'familiar'
  if (totalAttempts >= 30 && accuracyRate >= 0.8) return 'mastered'
  return 'familiar'
}

/**
 * Calculate trend from recent vs older answers
 * recentCorrect/recentTotal = last 20 answers
 * olderCorrect/olderTotal = 20 answers before that
 */
export function calculateTrend(
  recentCorrect: number,
  recentTotal: number,
  olderCorrect: number,
  olderTotal: number
): Trend {
  if (recentTotal < 5 || olderTotal < 5) return 'stable'
  const recentRate = recentCorrect / recentTotal
  const olderRate = olderCorrect / olderTotal
  const diff = recentRate - olderRate
  if (diff > 0.1) return 'improving'
  if (diff < -0.1) return 'declining'
  return 'stable'
}

/**
 * Determine if a topic needs more questions
 */
export function checkNeedsMoreQuestions(
  accuracyRate: number,
  totalAttempts: number,
  totalQuestions: number,
  avgTimesAnswered: number
): boolean {
  // User is struggling and has attempted enough
  if (accuracyRate < 0.5 && totalAttempts > 15) return true
  // All questions have been answered 3+ times (pool exhausted)
  if (avgTimesAnswered >= 3 && totalQuestions > 0) return true
  return false
}

/**
 * Calculate exam readiness score (0-100)
 * Weighted by priority: PRIO 1 = 4x, PRIO 2 = 3x, PRIO 3 = 2x, PRIO 4 = 1x
 */
export function calculateReadinessScore(
  topics: Array<{ priority: number; masteryLevel: MasteryLevel }>
): number {
  const masteryScores: Record<MasteryLevel, number> = {
    not_started: 0,
    beginner: 20,
    learning: 45,
    familiar: 70,
    mastered: 100,
  }
  const weightByPriority: Record<number, number> = { 1: 4, 2: 3, 3: 2, 4: 1 }

  let weightedSum = 0
  let totalWeight = 0
  for (const t of topics) {
    const w = weightByPriority[t.priority] ?? 1
    weightedSum += masteryScores[t.masteryLevel] * w
    totalWeight += w
  }
  return totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0
}
