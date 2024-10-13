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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "inspiry": "#2D87E3",
        "inspiry-secondary": "#2074C9",
        "inspiry-dark": "#22313F",
      },
    },
  },
  plugins: [],
};
export default config;
