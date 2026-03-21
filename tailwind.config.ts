import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#131313",
          dim: "#0e0e0e",
          bright: "#3a3939",
          container: {
            DEFAULT: "#201f1f",
            low: "#1c1b1b",
            high: "#2a2a2a",
            highest: "#353534",
            lowest: "#0e0e0e",
          },
        },
        primary: {
          DEFAULT: "#FFB4A6",
          container: "#E11900",
        },
        accent: {
          green: "#00C853",
          gold: "#FFB703",
        },
        on: {
          surface: "#e5e2e1",
          "surface-variant": "#e8bdb5",
          "primary-container": "#fff6f4",
        },
      },
      fontFamily: {
        headline: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
        data: ["var(--font-share-tech-mono)", "monospace"],
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
