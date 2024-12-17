/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'main-bg': '#121212',
        'secondary-bg': '#1E1E1E',
        'button':'#FF5722',
        'button-hover': '#FF784E',
        'orange': '#FF5722'
      },
      borderColor:{
        'border': '#FF5722',
        'border-hover': '#FF784E'
      },
      textColor:{
        'text': '#E0E0E0',
        'hover-text': '#FF784E',
        'secondary-text': '#A0A0A0',
        'heading': '#FFFFFF'
      }
    },
  },
  plugins: [],
}

