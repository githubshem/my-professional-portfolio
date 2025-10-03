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
        'electric-violet': '#8a2be2',
        'slate': '#c4b5fd',
        'light-slate': '#ddd6fe',
        'lightest-slate': '#ede9fe',
        
        // Keep original names for compatibility
        'navy': '#0a0a0f',
        'light-navy': '#1a1a2e',
        'lightest-navy': '#2a2a3e',
        'green': '#ff006e',
        'white': '#ede9fe',
      },
      fontFamily: {
        sans: ['Inter', 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'neon-pink': '0 0 5px theme("colors.neon-pink"), 0 0 20px theme("colors.neon-pink")',
        'neon-purple': '0 0 5px theme("colors.neon-purple"), 0 0 20px theme("colors.neon-purple")',
        'neon-cyan': '0 0 5px theme("colors.neon-cyan"), 0 0 20px theme("colors.neon-cyan")',
      },
    },
  },
  plugins: [],
}