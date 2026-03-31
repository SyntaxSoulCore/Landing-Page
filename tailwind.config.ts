import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080C14',
        navy: '#080C14',
        'navy-light': '#0D1220',
        'navy-card': '#0E1525',
        primary: {
          cyan: '#00E5FF',
          purple: '#8B2FE8',
        },
        accent: '#00BFFF',
        'neon-cyan': '#00E5FF',
        'neon-purple': '#8B2FE8',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        flicker: 'flicker 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
