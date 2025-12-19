import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Regal Luxury Palette (User Requested)
        // Billionaire Light Luxury Palette
        luxury: {
          white: '#FAFAFA',    // Alabaster / Porcelain
          onyx: '#111111',     // Deep Black / Obsidian
          gold: '#D4AF37',     // Champagne Gold
          platinum: '#E5E4E2', // Silver / Platinum
          pearl: '#FDFCF5',    // Warm Pearl
        },
        obsidian: {
          800: '#1e293b', // Fallback
          900: '#0f172a', // Rich blue-black
          950: '#020617', // Deepest black
        },
        // Metallic Gold / Silver Accents
        metallic: {
          gold: '#D4AF37',
          silver: '#C0C0C0',
          bronze: '#CD7F32',
        },
        // Standard Primary (Electric Blue Upgrade)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space)', 'sans-serif'], // For Headings
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1400px',
        },
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
