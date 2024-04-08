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
          '1': '#424242',
          '2': '#FFFFFF',
          '3': '#F0F0F0',
          '4': '#343434',
          'sombra': '#525252',
          // Puedes agregar más colores según tus necesidades
        },
      },
    },
  },
  plugins: [],
}