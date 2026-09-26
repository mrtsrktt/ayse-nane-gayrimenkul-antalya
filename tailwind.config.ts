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
        obsidian: {
          950: '#070A12',
          900: '#0C1222',
          850: '#111A2E',
          800: '#16223B',
          700: '#1E2F52',
        },
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E4C6',
          300: '#EBD1A0',
          400: '#DEC07E',
          500: '#C5A059',
          600: '#B0883B',
          700: '#8C6724',
          800: '#684B19',
          900: '#463210',
        },
        navy: {
          800: '#141E30',
          900: '#0C1222',
          950: '#070A12',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
