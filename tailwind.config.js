/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          '1': '#002337',//#424242
          '2': '#FFFFFF',
          '3': '#F0F0F0',
          '4': '#00425D',//'#343434'
          '5': '#1496EA',
          '6': '#147FC5',
          '7': '#585858',
          '8': '#FAF7F7',
          '9': '#9FA3A8',
          '10':'#006C8B',
          'sombra': '#525252',
          'rojoc': '#dc2d26',
          'rojoh': '#b9221c',
          'rojop': '#99201b',
          // Puedes agregar más colores según tus necesidades
        },
      },
    },
  },
  plugins: [],
}