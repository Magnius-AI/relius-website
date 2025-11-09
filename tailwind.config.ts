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
          DEFAULT: "#4A7C9F",
          50: "#EFF6FA",
          100: "#DFEDF5",
          200: "#BFDAEA",
          300: "#9FC8E0",
          400: "#7FB5D5",
          500: "#4A7C9F",
          600: "#3B6380",
          700: "#2C4A60",
          800: "#1E3140",
          900: "#0F1920",
          950: "#070D10",
        },
        accent: {
          DEFAULT: "#D67D1F",
          50: "#FEF6ED",
          100: "#FDEDDB",
          200: "#FBDBB7",
          300: "#F9C893",
          400: "#F7B66F",
          500: "#F2994A",
          600: "#D67D1F",
          700: "#AC5C18",
          800: "#783F11",
          900: "#442309",
          950: "#221105",
        },
        secondary: {
          DEFAULT: "#F8FAFC",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #4A7C9F 0%, #F2994A 100%)",
        "gradient-accent": "linear-gradient(135deg, #F2994A 0%, #FDEDDB 100%)",
        "gradient-mesh": "linear-gradient(135deg, #4A7C9F 0%, #5B91B3 35%, #F2994A 75%, #FEF6ED 100%)",
        "gradient-dark": "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        "pattern-dots": "radial-gradient(circle, rgba(74, 124, 159, 0.08) 1px, transparent 1px)",
        "pattern-grid": "linear-gradient(rgba(74, 124, 159, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 124, 159, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "pattern-dots": "24px 24px",
        "pattern-grid": "48px 48px",
      },
      boxShadow: {
        glow: "0 0 15px rgba(74, 124, 159, 0.25)",
        "glow-lg": "0 0 30px rgba(74, 124, 159, 0.3)",
        "glow-accent": "0 0 15px rgba(242, 153, 74, 0.25)",
        "glow-accent-lg": "0 0 30px rgba(242, 153, 74, 0.3)",
        "glow-secondary": "0 0 15px rgba(248, 250, 252, 0.4)",
        "glow-secondary-lg": "0 0 30px rgba(248, 250, 252, 0.45)",
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
