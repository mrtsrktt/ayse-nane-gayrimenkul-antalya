import type { Config } from "tailwindcss";
import path from "path";

const config: Config = {
  content: [
    path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "./app/**/*.{js,ts,jsx,tsx,mdx}"),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#101C2C',
          50: '#F0F3F7',
          100: '#D9E0E8',
          200: '#B0C0D1',
          800: '#182538',
          900: '#101C2C',
          950: '#0B131E',
        },
        ivory: {
          DEFAULT: '#F6F2EA',
          50: '#FDFAF5',
          100: '#F6F2EA',
          200: '#EAE4D6',
          300: '#DDD5C2',
        },
        paper: {
          DEFAULT: '#FCFBF8',
          50: '#FFFFFF',
          100: '#FCFBF8',
          200: '#F5F3ED',
        },
        limestone: {
          DEFAULT: '#D9D1C4',
          100: '#EFECE6',
          200: '#E3DDD2',
          300: '#D9D1C4',
          400: '#C2B8A8',
        },
        bronze: {
          DEFAULT: '#9A7845',
          50: '#FBF8F3',
          100: '#F4ECE0',
          200: '#E6D4BE',
          500: '#9A7845',
          600: '#836537',
          700: '#69512A',
        },
        olive: {
          DEFAULT: '#4D594E',
          100: '#E7EAE7',
          500: '#4D594E',
          700: '#3A443B',
        },
        brand: {
          text: '#18202A',
          muted: '#66707A',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Libre Baskerville', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1320px',
      },
    },
  },
  plugins: [],
};

export default config;
