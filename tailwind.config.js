/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 0 15px -1px rgba(135, 141, 119, 0.9)', // Sombra, usar color primary
        'modal': '0 0 490px 7000px rgba(177, 184, 162, 0.9)', // Sombra para modales, usar color primary
        'btn': 'inset 0 1px 2px #ffffff30, 0 1px 2px rgba(135, 141, 119, 1), 0 2px 4px rgba(135, 141, 119, 1)', // Sombra para botones, usar color primary
      },
      fontFamily: {
        'dance': ['Dancing Script', 'cursive'], // Títulos de Cards
        'sans': ['Montserrat', 'sans-serif'], // Texto general
        'pop': ['Poppins', 'sans-serif'], // Texto Derecho
        'play': ['Playfair Display', 'serif'], // Texto frases muy cursiva
      },
      colors: {
        'dark-primary': 'rgba(100, 105, 88, 1)', // Versión más oscura de primary, usar para sombras o detalles
        'primary': 'rgba(135, 141, 119, 1)', // Dark, se usa en todo
        'secondary': 'rgba(177, 184, 162, 1)', // Versión más clara, se usa en detalles
        'golden': '#d4af37', // Dorado, usar en detalles especiales
        'brown': '#cd966c', // Marrón, usar en textos secundarios
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}