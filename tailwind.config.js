/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      normal: '1rem',
      md: '1.2rem',
      lg: '1.8rem',
      xl: '2.4rem',
      xxl: '3.6rem',
      xxxl: '5rem'
    },
    colors: {
      secondary: "#FBFBFB",
      white: "#FFFFFF",
      black: '#121212',
      red: "#FF002E",
      grey: "#ADADAD",
      green: '#00AC4F',
      lightGreen: "#E1FBED",
      error: '#DA0060',
      action: '#00AC4F',
    },
    extend: {
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}