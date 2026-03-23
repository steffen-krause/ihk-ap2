/**
 * XP & Level System
 */

const XP_BY_DIFFICULTY: Record<string, number> = {
  easy: 5,
  medium: 10,
  hard: 20,
}

/**
 * Calculate XP earned for a correct answer
 * Streak multiplier: +10% per streak day, max 2x
 */
export function calculateXP(difficulty: string, isCorrect: boolean, currentStreak: number): number {
  if (!isCorrect) return 0
  const base = XP_BY_DIFFICULTY[difficulty] ?? 10
  const streakMultiplier = Math.min(1 + currentStreak * 0.1, 2)
  return Math.round(base * streakMultiplier)
}

/**
 * Calculate level from total XP
 * Level 1 = 0 XP, Level 2 = 50 XP, Level 5 = 1000 XP, Level 10 = 4500 XP
 */
export function calculateLevel(totalXp: number): number {
  return Math.floor(Math.sqrt(totalXp / 50)) + 1
}

/**
 * XP needed to reach a specific level
 */
export function xpForLevel(level: number): number {
  return (level - 1) * (level - 1) * 50
}

/**
 * Progress percentage toward next level
 */
export function levelProgress(totalXp: number): { level: number; progress: number; xpInLevel: number; xpNeeded: number } {
  const level = calculateLevel(totalXp)
  const currentLevelXp = xpForLevel(level)
  const nextLevelXp = xpForLevel(level + 1)
  const xpInLevel = totalXp - currentLevelXp
  const xpNeeded = nextLevelXp - currentLevelXp
  return {
    level,
    progress: Math.round((xpInLevel / xpNeeded) * 100),
    xpInLevel,
    xpNeeded,
  }
}

/**
 * Update streak based on last active date
 * Returns new streak count and whether it's a new day
 */
export function updateStreak(
  lastActiveDate: string | null,
  currentStreak: number
): { newStreak: number; isNewDay: boolean } {
  const today = new Date().toISOString().split('T')[0]

  if (lastActiveDate === today) {
    return { newStreak: currentStreak, isNewDay: false }
  }

  if (!lastActiveDate) {
    return { newStreak: 1, isNewDay: true }
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = yesterday.toISOString().split('T')[0]

  if (lastActiveDate === yesterdayStr) {
    return { newStreak: currentStreak + 1, isNewDay: true }
  }

  // Streak broken
  return { newStreak: 1, isNewDay: true }
}
