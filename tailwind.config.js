/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F5",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#18363B",
          dark: "#0F262B",
          light: "#224A50",
          deep: "#0B1D20",
        },
        accent: {
          DEFAULT: "#B7925A",
          light: "#CCA972",
          dark: "#96753E",
          gold: "#D4B478",
          subtle: "rgba(183, 146, 90, 0.12)",
        },
        textMuted: "#667174",
        textMain: "#1C2628",
        cream: "#F3EFE6",
        creamLight: "#FAF8F4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        luxury: "0 20px 45px -15px rgba(24, 54, 59, 0.08)",
        "luxury-hover": "0 30px 65px -15px rgba(24, 54, 59, 0.16)",
        gold: "0 12px 30px -5px rgba(183, 146, 90, 0.3)",
      },
    },
  },
  plugins: [],
};
