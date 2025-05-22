/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0070F3', // Azul eléctrico
      },
      fontFamily: {
        sans: [
          'Inter', 'Montserrat', 'Open Sans', 'Roboto', 'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}; 