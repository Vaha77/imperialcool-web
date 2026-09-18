import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070B",
          soft: "#0A0E15",
        },
        navy: {
          950: "#060A11",
          900: "#0A101B",
          800: "#0F1826",
          700: "#152233",
          600: "#1C2E44",
        },
        steel: {
          700: "#1B4A6B",
          600: "#245E86",
          500: "#2E76A6",
          400: "#4A93C4",
        },
        ice: {
          300: "#BFE9F7",
          400: "#9FDCF2",
          500: "#7ACCEA",
          glow: "#DFF6FD",
        },
        silver: {
          300: "#D7DEE6",
          400: "#AEB9C6",
          500: "#8B97A6",
        },
        paper: "#F6F8FA",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "PingFang SC",
          "Microsoft YaHei",
          "Noto Sans SC",
          "sans-serif",
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "PingFang SC",
          "Microsoft YaHei",
          "Noto Sans SC",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wider2: "0.18em",
        wider3: "0.28em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      backgroundImage: {
        "grid-line":
          "linear-gradient(to right, rgba(215,222,230,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(215,222,230,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(74,147,196,0.20), rgba(5,7,11,0) 60%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
