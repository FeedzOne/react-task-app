/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'feedz': '#00a2ff',
        'feedz-dark': '#0069a5'
      },
    },
  },
  plugins: [],
}

