import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B3C5D",
          50: "#E8F1F7",
          100: "#C5DAE9",
          200: "#8AB5D3",
          300: "#4F90BC",
          400: "#1E6B9E",
          500: "#0B3C5D",
          600: "#093250",
          700: "#072843",
          800: "#051E35",
          900: "#031428",
        },
        accent: {
          DEFAULT: "#FF8C00",
          50: "#FFF4E0",
          100: "#FFE3AD",
          200: "#FFD07A",
          300: "#FFBD47",
          400: "#FFAA14",
          500: "#FF8C00",
          600: "#E07A00",
          700: "#B36100",
          800: "#864800",
          900: "#592F00",
        },
        construction: {
          dark: "#1A1A1A",
          light: "#F8F9FA",
          gray: "#6B7280",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Poppins", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(11,60,93,0.08)",
        "card-hover": "0 8px 40px rgba(11,60,93,0.18)",
        glass: "0 8px 32px rgba(11,60,93,0.15)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, rgba(11,60,93,0.92) 0%, rgba(11,60,93,0.7) 50%, rgba(255,140,0,0.3) 100%)",
        "gradient-cta": "linear-gradient(135deg, #0B3C5D 0%, #1a5c8a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
