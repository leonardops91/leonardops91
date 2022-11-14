/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**.tsx'
  ],
  theme: {
    extend: {
      backgroundImage:{
        code: 'url(/src/assets/bg-code.jpg)',
        space: 'url(/src/assets/bg-space.jpg)',
        nature: 'url(/src/assets/bg-nature.jpg)',
        gradient: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1)"
      },
      fontSize: {
        sm: 16,
        md: 24,
        lg: 32,
        xlg: 40
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',

        'purple-900': '#361352',
        'purple-400': '#C084FC',
        'purple-100': '#FAE8FF',

        'blue-900': '#0F172A',
        'blue-400': '#1E3A8A',
        'blue-100': '#E2E8F0',

        'red-900': '#881337',
        'red-400': '#F87171',
        'red-100': '#FFE4E6',

        'green-900': '#064E3B',
        'green-400': '#34D399',
        'green-100': '#ECFDF5',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
