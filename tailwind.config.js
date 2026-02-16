/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2,12,27,0.7)',
        'dark-slate': '#495670',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#64ffda',
        'neon-pink': '#ff006e',
        'neon-purple': '#b967ff',
        'neon-cyan': '#05d9e8',
        'neon-magenta': '#ff1493',
        'midnight': '#0a0e27',
        'light-midnight': '#1a1e37',
        'maroon': '#8b0a1a',
        'electric-violet': '#7b2cbf',
      },
      fontFamily: {
        'mono': ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
