/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EFCC80',
          dark: '#EFCC80',
        },
        'on-primary': {
          DEFAULT: '#333333',
          dark: '#333333',
        },
        background: {
          DEFAULT: '#F3F3F3',
          dark: '#121212',
        },
        'on-background': {
          DEFAULT: '#333333',
          dark: '#E6E7EB',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          dark: '#1f1f1f',
        },
        'on-surface': {
          DEFAULT: '#333333',
          dark: '#E6E7EB',
        },
        success: {
          DEFAULT: '#46B56C',
          dark: '#46B56C',
        },
        error: {
          DEFAULT: '#D64C4C',
          dark: '#D64C4C',
        },
        'on-error': {
          DEFAULT: '#FFFFFF',
          dark: '#FFFFFF',
        },
        warning: {
          DEFAULT: '#FFAB2E',
          dark: '#FFAB2E',
        },
        inactive: {
          DEFAULT: '#D0D0D0',
          dark: '#5E5E5E',
        },
        'on-inactive': {
          DEFAULT: '#1f1f1f',
          dark: '#E6E7EB',
        },
        outline: {
          DEFAULT: '#EEEEEE',
          dark: '#EEEEEE',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
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
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};