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
        sand: {
          50: '#FDFCFB',
          100: '#FAF9F5',
          200: '#F4F1EA',
          300: '#EAE6DF',
          400: '#D5CFC5',
          500: '#B8B0A2',
        },
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E4C6',
          300: '#EBD1A0',
          400: '#DEC07E',
          500: '#B89047',
          600: '#9E7A36',
          700: '#7E6128',
          800: '#5F491E',
          900: '#3F3014',
        },
        aegean: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          700: '#1E3A5F',
          800: '#142742',
          900: '#0F1E36',
          950: '#0A1424',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
