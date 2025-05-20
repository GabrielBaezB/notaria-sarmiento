/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'notaria-azul': '#1B2A41',
        'notaria-blanco': '#FFFFFF',
        'notaria-gris': '#F5F5F5',
        'notaria-dorado': '#C5A880',
      },
    },
  },
  plugins: [],
}
