/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c',
        foreground: '#ededed',
        primary: {
          DEFAULT: '#3b82f6', // Professional blue
          dark: '#1d4ed8',
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Indigo/Purple
          dark: '#6d28d9',
        },
        accent: {
          cyan: '#06b6d4',
          green: '#10b981',
        },
        card: '#161618',
        border: '#27272a',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
          'fade-in': 'fadeIn 0.5s ease-out forwards',
          'slide-up': 'slideUp 0.5s ease-out forwards',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
          fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
          },
          slideUp: {
              '0%': { transform: 'translateY(20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
          },
      },
    },
  },
  plugins: [],
}
