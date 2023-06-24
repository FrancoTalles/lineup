/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      pop: ['Poppins', 'sans-serif'],
      ubun: ['Ubuntu', 'sans-serif']
    },
    extend: {
      colors: {
        MainRed: '#EF1D41',
        MainBlue: '#0A1421',
        MainWhite: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

