/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#010C1E',
        navy: '#333333',
        primary: {
          DEFAULT: '#FF3C00',
          light: '#FF5A20',
          mist: 'rgba(255,60,0,0.10)',
        },
        'off-white': '#FFFFFF',
        muted: '#555555',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
