/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
          hover: 'var(--bg-hover)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          bright: 'var(--accent-bright)',
          dim: 'var(--accent-dim)',
        },
        prio: {
          1: 'var(--prio-1)',
          2: 'var(--prio-2)',
          3: 'var(--prio-3)',
          4: 'var(--prio-4)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius-sm)',
        lg: 'var(--radius-lg)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
