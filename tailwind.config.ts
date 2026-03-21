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
          red: "#E11900",
          "red-hover": "#C41500",
          dark: "#111111",
          navy: "#0F172A",
        },
        surface: {
          white: "#FFFFFF",
          light: "#FAFAFA",
          muted: "#F4F4F5",
          border: "#E4E4E7",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "8px",
        btn: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
