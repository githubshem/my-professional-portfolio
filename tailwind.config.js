/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Synthwave Theme - Midnight Black & Maroon Red
        'midnight': '#0a0a0f',
        'dark-midnight': '#050508',
        'light-midnight': '#1a1a2e',
        'maroon': '#8b0a1a',
        'light-maroon': '#b91c2e',
        'neon-pink': '#ff006e',
        'neon-purple': '#b967ff',
        'neon-cyan': '#05d9e8',
        'neon-magenta': '#ff1493',
        // Sixth accent for the skill-domain labels. electric-violet only reaches
        // 3.3:1 on midnight and fails WCAG AA at label size; this clears 7:1.
        'neon-blue': '#4d9fff',
        'electric-violet': '#8a2be2',
        'lighter-midnight': '#2a2a3e',
        'neon-pink-bright': '#ff5c8f',
        'slate': '#c4b5fd',
        'light-slate': '#ddd6fe',
        'lightest-slate': '#ede9fe',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'neon-pink': '0 0 5px theme("colors.neon-pink"), 0 0 20px theme("colors.neon-pink")',
        'neon-purple': '0 0 5px theme("colors.neon-purple"), 0 0 20px theme("colors.neon-purple")',
        'neon-cyan': '0 0 5px theme("colors.neon-cyan"), 0 0 20px theme("colors.neon-cyan")',
        'glow-pink': '0 10px 30px -10px rgba(255, 0, 110, 0.3)',
        'glow-bloom': '0 0 0 1px rgba(255, 0, 110, 0.35), 0 0 24px rgba(255, 0, 110, 0.28), 0 18px 45px -6px rgba(255, 0, 110, 0.45), 0 0 90px -10px rgba(185, 103, 255, 0.35)',
        'glow-pink-sm': '0 0 10px rgba(255, 0, 110, 0.3)',
        'glow-drawer': '-10px 0 30px rgba(255, 0, 110, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
