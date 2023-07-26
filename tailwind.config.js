/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#dbdbdb',
        'off-white': '#f0f0f0',
        'smokey-grey': '#716f6f',
        'off-black': '#141414',
        'off-purple': '#854dff',
        'light-red': '#ff5757',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

