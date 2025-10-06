// src/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lush-green": "#3A5B47",
        "waterfall-blue": "#87CEEB",
        "earthy-brown": "#A18A68",
        "temple-gold": "#FFD700",
        "ayurvedic-ochre": "#E6A55B",
        "dark-text": "#2C3E50",
        "light-bg": "#F8F9FA",
      },
      fontFamily: {
        // A clean sans-serif for body text
        lato: ["Lato", "sans-serif"],
        // An elegant serif for headings
        lora: ["Lora", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;