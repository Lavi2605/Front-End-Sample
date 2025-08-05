/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nature and humanity inspired palette
        'earth': {
          50: '#faf9f6',
          100: '#f5f3f0',
          200: '#e8e4dd',
          300: '#d4ccc0',
          400: '#b8a99a',
          500: '#9c8b7a',
          600: '#8a7a6a',
          700: '#736557',
          800: '#5f5448',
          900: '#4f453c',
        },
        'sage': {
          50: '#f6f8f5',
          100: '#edf2eb',
          200: '#d8e3d4',
          300: '#b8c9b0',
          400: '#8fa67f',
          500: '#6b8a5a',
          600: '#56704a',
          700: '#465a3d',
          800: '#3b4a33',
          900: '#323e2c',
        },
        'warm': {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#f9eed8',
          300: '#f4e0b8',
          400: '#eccb8a',
          500: '#e3b25c',
          600: '#d99a3a',
          700: '#c17e2e',
          800: '#9e6528',
          900: '#805326',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 