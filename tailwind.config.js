/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradient-start': 'hsl(249, 99%, 64%)',
        'gradient-end': 'hsl(278, 94%, 30%)',
        white:'hsl(0, 0%, 100%)',
        'light-gray-violet':'hsl(270, 3%, 87%)',
        'dark-gray-violet':'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)'
      }
    },
  },
  plugins: [],
}