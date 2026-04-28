/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0f172a', // slate-900
          lighter: '#1e293b', // slate-800
          card: '#1e293b',
        },
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          hover: '#2563eb', // blue-600
        },
        accent: {
          DEFAULT: '#8b5cf6', // violet-500
          hover: '#7c3aed', // violet-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
