/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EFCC80',
          dark: '#F5D899',
        },
        'on-primary': {
          DEFAULT: '#1A1A1A',
          dark: '#1A1A1A',
        },
        background: {
          DEFAULT: '#F3F3F3',
          dark: '#0A0A0A',
        },
        'on-background': {
          DEFAULT: '#1A1A1A',
          dark: '#F0F0F0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1A1A1A',
        },
        'on-surface': {
          DEFAULT: '#1A1A1A',
          dark: '#F0F0F0',
        },
        success: {
          DEFAULT: '#46B56C',
          dark: '#5CD682',
        },
        error: {
          DEFAULT: '#D64C4C',
          dark: '#FF6B6B',
        },
        'on-error': {
          DEFAULT: '#FFFFFF',
          dark: '#1A1A1A',
        },
        warning: {
          DEFAULT: '#FFAB2E',
          dark: '#FFC04D',
        },
        inactive: {
          DEFAULT: '#D0D0D0',
          dark: '#404040',
        },
        'on-inactive': {
          DEFAULT: '#666666',
          dark: '#A0A0A0',
        },
        outline: {
          DEFAULT: '#E0E0E0',
          dark: '#2A2A2A',
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
  plugins: [
    function ({ addUtilities, theme }) {
      const colors = theme('colors');
      const darkUtilities = {};

      // Generate dark mode color utilities
      Object.keys(colors).forEach((colorName) => {
        if (typeof colors[colorName] === 'object' && colors[colorName].dark) {
          // For backgrounds
          darkUtilities[`.dark .bg-${colorName}`] = {
            backgroundColor: colors[colorName].dark,
          };
          // For text
          darkUtilities[`.dark .text-${colorName}`] = {
            color: colors[colorName].dark,
          };
          // For borders
          darkUtilities[`.dark .border-${colorName}`] = {
            borderColor: colors[colorName].dark,
          };
        }
      });

      addUtilities(darkUtilities);
    },
  ],
};