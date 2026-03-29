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
          cream: "#F5F2ED",
          black: "#1A1D19",
          forest: "#03854C",
          forestDark: "#026B3D",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        editorial: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        "phancy-lg": "32px",
      },
      boxShadow: {
        phancy: "0 20px 20px rgba(26, 29, 25, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
