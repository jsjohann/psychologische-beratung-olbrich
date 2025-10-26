/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          cabin: ['Cabin', 'sans-serif'],
        },
        colors: {
          'warm-green': '#4c4f02',
          'white': '#fdfff7',
          'alabaster': '#ede7d9',
          'coral-red': '#e56c5c',
          'black': '#051014',
          'gray': '#99958c',
        },
      },
    },
    plugins: [],
  }