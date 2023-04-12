/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Heebo: ['Heebo', 'sans-serif'],
        Arimo: ['Arimo', 'sans-serif'],
        Hind: ['Hind', 'sans-serif'],
       },
    },
  },
  plugins: [],
}
