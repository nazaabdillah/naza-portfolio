import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'monospace'],
        sans: ['var(--font-body)', 'monospace'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        brand: '#0047FF',
        dark: '#0a0a0a',
      },
      // INJEKSI ANIMASI SUPER RINGAN
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up-1': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
        'fade-up-2': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
        'fade-up-3': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards',
      }
    },
  },
  plugins: [],
}
export default config