import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#12315B",
          50: "#E9EEF6",
          100: "#D3DDEA",
          200: "#A8C0D6",
          300: "#7CA3C1",
          400: "#4F86AC",
          500: "#12315B",
          600: "#0F2748",
          700: "#0B1B33",
          800: "#071120",
          900: "#030710",
          950: "#010309",
        },
        accent: {
          DEFAULT: "#D89A28",
          50: "#FDF7EC",
          100: "#F9EACB",
          200: "#F0D495",
          300: "#E6BD5F",
          400: "#DCA62A",
          500: "#D89A28",
          600: "#B97E1F",
          700: "#8B5B16",
          800: "#5D3A0D",
          900: "#2F1D06",
        },
        secondary: {
          DEFAULT: "#F3E9D8",
          50: "#FEFBF6",
          100: "#FBF3E6",
          200: "#F4E0C2",
          300: "#ECCEA0",
          400: "#E2BD7E",
          500: "#D8AB5C",
          600: "#BA8F47",
          700: "#8A6933",
          800: "#5B4520",
          900: "#2B210E",
          950: "#161108",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #12315B 0%, #D89A28 100%)",
        "gradient-accent": "linear-gradient(135deg, #D89A28 0%, #F3E9D8 100%)",
        "gradient-mesh": "linear-gradient(135deg, #12315B 0%, #1F3F6B 35%, #D89A28 75%, #F3E9D8 100%)",
        "gradient-dark": "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        "pattern-dots": "radial-gradient(circle, rgba(18, 49, 91, 0.08) 1px, transparent 1px)",
        "pattern-grid": "linear-gradient(rgba(18, 49, 91, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 49, 91, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "pattern-dots": "24px 24px",
        "pattern-grid": "48px 48px",
      },
      boxShadow: {
        glow: "0 0 15px rgba(18, 49, 91, 0.3)",
        "glow-lg": "0 0 30px rgba(18, 49, 91, 0.35)",
        "glow-accent": "0 0 15px rgba(216, 154, 40, 0.25)",
        "glow-accent-lg": "0 0 30px rgba(216, 154, 40, 0.3)",
        "glow-secondary": "0 0 15px rgba(243, 233, 216, 0.4)",
        "glow-secondary-lg": "0 0 30px rgba(243, 233, 216, 0.45)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
