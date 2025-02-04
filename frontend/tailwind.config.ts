import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nightmare: "Nightscary Free Trial, sans-serif",
        creepy: "Matter Of Fact, sans-serif",
        raven: "Raven Song, sans-serif",
        ghost: "Ghost Terror, sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
