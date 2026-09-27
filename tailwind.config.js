/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: 'var(--bg-main)',
        charcoal: 'var(--bg-alt)',
        navy: 'var(--bg-card-solid)',
        primary: {
          DEFAULT: '#FF3C00',
          light: '#FF5A20',
          mist: 'rgba(255,60,0,0.10)',
        },
        'off-white': 'var(--text-body)',
        muted: 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
