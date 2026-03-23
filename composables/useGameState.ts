export function useGameState() {
  const stats = useState<any>('gameStats', () => null)
  const loading = useState('gameStatsLoading', () => false)

  async function fetchStats() {
    loading.value = true
    try {
      stats.value = await $fetch('/api/stats/overview')
    } catch (e) {
      console.error('Failed to fetch stats:', e)
    } finally {
      loading.value = false
    }
  }

  return {
    stats,
    loading,
    fetchStats,
  }
}
