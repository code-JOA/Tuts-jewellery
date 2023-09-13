import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      body: [
        "Louis Vuitton Web",
        "Helvetico Neue",
        "Helvetico",
        "Arial",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
export default config;
