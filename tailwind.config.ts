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
          DEFAULT: "#0F172A", // Slate 900
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
        accent: {
          DEFAULT: "#2563EB", // Blue 600 - Slightly deeper, more professional
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        secondary: {
          DEFAULT: "#64748B", // Slate 500
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
        "gradient-primary": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "gradient-accent": "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
        "gradient-mesh": "radial-gradient(at 40% 20%, rgba(37, 99, 235, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(96, 165, 250, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(29, 78, 216, 0.1) 0px, transparent 50%)",
        "gradient-dark": "linear-gradient(to bottom, #020617, #0F172A)",
        "gradient-glass": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "pattern-dots": "radial-gradient(circle, rgba(148, 163, 184, 0.1) 1px, transparent 1px)",
        "pattern-grid": "linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "pattern-dots": "24px 24px",
        "pattern-grid": "40px 40px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(37, 99, 235, 0.15)",
        "glow-lg": "0 0 40px rgba(37, 99, 235, 0.2)",
        "glow-accent": "0 0 20px rgba(37, 99, 235, 0.25)",
        "glow-accent-lg": "0 0 40px rgba(37, 99, 235, 0.3)",
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
