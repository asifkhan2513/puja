// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        secondary: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#fb923c', // light orange for hover
          light: '#fdba74',
          dark: '#f97316',
        },
        dark: {
          DEFAULT: '#0f172a', // custom dark color
          50: '#1e293b',
          100: '#334155',
          200: '#475569',
          300: '#64748b',
          400: '#94a3b8',
          500: '#cbd5e1',
          600: '#e2e8f0',
          700: '#f1f5f9',
          800: '#f8fafc',
          900: '#ffffff',
        },
      },
      maxWidth: {
        'screen-2xl': '1536px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
