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
        'lg': '0 0 15px -1px rgba(1, 34, 64, 0.9)', // Sombra, usar color primary
        'modal': '0 0 490px 7000px rgba(1, 34, 64, 0.8)', // Sombra para modales, usar color primary
        'btn': 'inset 0 1px 2px #ffffff30, 0 1px 2px rgba(1, 34, 64, 1), 0 2px 4px rgba(1, 34, 64, 1)', // Sombra para botones, usar color primary
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'dance': ['Dancing Script', 'cursive'],
      },
      colors: {
        'primary': 'rgb(1, 34, 64)', // Dark, se usa en todo
        'secondary': 'rgb(1, 50, 95)', // Versión más clara, se usa en detalles
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}