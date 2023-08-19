/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        serif: ['Poppins', 'serif'],
        mono: ['CustomMono', 'monospace'],
      },
      screens: {
        'xs': '260px',
        'sm': '360px',
        'md': '640px',
        'lg': '960px'
      }
    },
  },
  plugins: [],
}

