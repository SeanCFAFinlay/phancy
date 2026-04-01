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
        phancy: {
          // Warm Neutrals
          cream: "#FAF8F5",
          oat: "#F5F2ED",
          sand: "#E8E4DD",
          "warm-white": "#FDFCFA",
          // Darks
          black: "#1A1D19",
          charcoal: "#3D3D3D",
          // Brand
          forest: "#03854C",
          forestDark: "#026B3D",
          "forest-light": "#E8F5EE",
          // Accents
          walnut: "#5C4033",
          terracotta: "#C4785C",
          "terracotta-light": "#F5E6E0",
          moss: "#6B7D5C",
          sage: "#8FAE8B",
          "sage-light": "#D4E4D1",
          // Supporting
          muted: "#6B695F",
          line: "#E5E2DB",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        editorial: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        "phancy-sm": "10px",
        "phancy-md": "16px",
        "phancy-lg": "24px",
        "phancy-xl": "32px",
        "phancy-2xl": "40px",
      },
      boxShadow: {
        phancy: "0 4px 20px rgba(26, 29, 25, 0.05)",
        "phancy-hover": "0 12px 32px rgba(26, 29, 25, 0.08)",
        "phancy-lg": "0 16px 48px rgba(26, 29, 25, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
