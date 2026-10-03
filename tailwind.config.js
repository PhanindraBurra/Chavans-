/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo colors & monochromatic medical aesthetics
        clinic: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#067C24', // EXACT LOGO GREEN
          700: '#05661E',
          800: '#045217',
          900: '#033D12',
          950: '#022109',
          DEFAULT: '#067C24',
        },
        forest: {
          DEFAULT: '#045217',
          deep: '#022109',
          dark: '#032B0E',
          light: '#0A6B22',
        },
        mint: {
          50: '#F7FDF9',
          100: '#E8F8EC',
          200: '#D1F4DC',
          300: '#A7F3D0',
        },
        dark: {
          DEFAULT: '#0B2414',
          deep: '#031A09',
          muted: '#23422C',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(6, 124, 36, 0.07)',
        'luxury-hover': '0 25px 50px -12px rgba(6, 124, 36, 0.15)',
        'glow-clinic': '0 0 25px rgba(6, 124, 36, 0.35)',
        'glass': '0 8px 32px 0 rgba(6, 124, 36, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(6, 124, 36, 0.6)' },
          '50%': { transform: 'scale(1.04)', boxShadow: '0 0 20px 6px rgba(6, 124, 36, 0.4)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
