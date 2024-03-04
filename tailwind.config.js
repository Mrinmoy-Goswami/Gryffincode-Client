/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'potter':["MedievalSharp","sans-serif"],
        'hero':["Cinzel Decorative"," serif"],
        'quote':["Tangerine", "cursive"]
      }
    },
  },
  plugins: [],
}

