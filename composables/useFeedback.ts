import confetti from 'canvas-confetti'

const soundEnabled = ref(true)

// Audio context for synthesized sounds
let audioCtx: AudioContext | null = null
function getAudioCtx() {
  if (!audioCtx && typeof window !== 'undefined') {
    audioCtx = new AudioContext()
  }
  return audioCtx
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.12) {
  if (!soundEnabled.value) return
  const ctx = getAudioCtx()
  if (!ctx) return
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = type
  osc.frequency.value = frequency
  gain.gain.setValueAtTime(volume, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
  osc.connect(gain).connect(ctx.destination)
  osc.start()
  osc.stop(ctx.currentTime + duration)
}

export function useFeedback() {
  function correctAnswer() {
    // Confetti burst
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7c5cfc', '#9b7fff', '#22c55e', '#3b82f6'],
      disableForReducedMotion: true,
    })
    // Success "ding" - two quick ascending tones
    playTone(880, 0.15, 'sine', 0.1)
    setTimeout(() => playTone(1174, 0.2, 'sine', 0.08), 100)
  }

  function wrongAnswer() {
    // Soft descending tone
    playTone(330, 0.15, 'triangle', 0.08)
    setTimeout(() => playTone(260, 0.25, 'triangle', 0.06), 120)
  }

  function levelUp() {
    // Big confetti
    const duration = 2000
    const end = Date.now() + duration
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#7c5cfc', '#f59e0b', '#22c55e'],
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#7c5cfc', '#f59e0b', '#22c55e'],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
    // Fanfare
    playTone(523, 0.15, 'square', 0.06)
    setTimeout(() => playTone(659, 0.15, 'square', 0.06), 150)
    setTimeout(() => playTone(784, 0.15, 'square', 0.06), 300)
    setTimeout(() => playTone(1047, 0.4, 'square', 0.08), 450)
  }

  function streakMilestone() {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ef4444', '#f97316'],
    })
    playTone(660, 0.1, 'sine', 0.08)
    setTimeout(() => playTone(880, 0.1, 'sine', 0.08), 100)
    setTimeout(() => playTone(1100, 0.3, 'sine', 0.1), 200)
  }

  return {
    soundEnabled,
    correctAnswer,
    wrongAnswer,
    levelUp,
    streakMilestone,
  }
}
