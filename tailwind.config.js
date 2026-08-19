/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        ink:        '#1c1a15',
        'ink-soft': '#4a453c',
        'green-deep':'#123626',
        green:      '#2c7a4b',
        'green-soft':'#dde8dc',
        red:        '#ac1b32',
        'red-deep': '#7d1226',
        gold:       '#c9972f',
        sand:       '#f5efe2',
        'sand-2':   '#ece2cb',
        'sand-3':   '#e4d6b4',
        'card-black':'#131210',
        line:       'rgba(28,26,21,0.14)',
        'line-soft':'rgba(245,239,226,0.28)',
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,26,21,.06), 0 12px 28px -18px rgba(28,26,21,.35)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      borderRadius: {
        sm: '2px',
      },
    },
  },
  plugins: [],
}
