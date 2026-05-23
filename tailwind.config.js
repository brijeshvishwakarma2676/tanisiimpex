/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#0B1522',
          900: '#0F1E2E',
          800: '#1A2F45',
          700: '#26425E',
          600: '#36597A',
          500: '#4A7599',
        },
        gold: {
          300: '#EAE1D0',
          400: '#D5C4A1',
          500: '#C1A173',
          600: '#A6824D',
          700: '#8A693B',
        },
        navy: {
          950: '#0a0e1a',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        section: '7rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 10px 40px -10px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
        'card-hover': '0 20px 50px -15px rgba(0,0,0,0.15), 0 2px 10px rgba(0,0,0,0.05)',
        'premium': '0 30px 60px -15px rgba(193,161,115,0.15), 0 0 20px rgba(193,161,115,0.05)',
        'glow': '0 0 20px rgba(193,161,115,0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B1522 0%, #0F1E2E 40%, #0f172a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c8a850 0%, #e0ca80 50%, #c8a850 100%)',
        'gold-text': 'linear-gradient(135deg, #d4b968 0%, #e0ca80 40%, #c8a850 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #0F1E2E 0%, #1A2F45 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0B1522 0%, #0a0e1a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'globe-rotate': 'globeRotate 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        globeRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
