/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Mobile-first breakpoints
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Custom breakpoints for hardware store
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
        'wide': '1440px',
      },
      colors: {
        // Hardware store brand colors
        primary: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF6B35', // Main brand color
          600: '#E64A19',
          700: '#D84315',
          800: '#BF360C',
          900: '#A62100',
        },
        secondary: {
          50: '#E8F5E8',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#2E7D32', // Trust green
          600: '#388E3C',
          700: '#2E7D32',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        // Semantic colors
        success: {
          50: '#E8F5E8',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
        },
        error: {
          50: '#FFEBEE',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
        },
        warning: {
          50: '#FFF8E1',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
        },
        info: {
          50: '#E3F2FD',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
        },
        // Neutral grays
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        // Hardware category colors
        paints: '#FF6B35',
        hardware: '#795548',
        sanitary: '#2196F3',
        electrical: '#FFC107',
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Mobile-optimized typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        // Mobile-specific sizes
        'mobile-xs': ['0.7rem', { lineHeight: '1rem' }],
        'mobile-sm': ['0.8rem', { lineHeight: '1.2rem' }],
        'mobile-base': ['0.9rem', { lineHeight: '1.4rem' }],
        'mobile-lg': ['1rem', { lineHeight: '1.5rem' }],
      },
      spacing: {
        // Touch-friendly spacing
        'touch': '44px',
        'touch-lg': '48px',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      borderRadius: {
        'mobile': '8px',
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'mobile': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'mobile-lg': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'fab': '0 6px 20px rgba(255, 107, 53, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      zIndex: {
        'drawer': 1200,
        'modal': 1300,
        'snackbar': 1400,
        'tooltip': 1500,
        'fab': 1000,
      },
    },
  },
  plugins: [
    // Custom plugin for mobile utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.touch-manipulation': {
          'touch-action': 'manipulation',
        },
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.safe-area-inset': {
          'padding-top': 'env(safe-area-inset-top)',
          'padding-right': 'env(safe-area-inset-right)',
          'padding-bottom': 'env(safe-area-inset-bottom)',
          'padding-left': 'env(safe-area-inset-left)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
