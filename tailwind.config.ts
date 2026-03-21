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
        brand: {
          black: "#1A1C1E",
          charcoal: "#2D2F31",
          dark: "#1A1C1E",
          red: "#1A1C1E",
          "red-hover": "#2D2F31",
          navy: "#1A1C1E",
        },
        accent: {
          emerald: "#008F5D",
          "emerald-light": "#E6F4EE",
        },
        surface: {
          white: "#FFFFFF",
          light: "#F8F9FA",
          muted: "#F1F3F4",
          dim: "#E8EAED",
          border: "#E8EAED",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-share-tech-mono)", "monospace"],
      },
      borderRadius: {
        card: "2px",
        btn: "0px",
      },
    },
  },
  plugins: [],
};
export default config;
