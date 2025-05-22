module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
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