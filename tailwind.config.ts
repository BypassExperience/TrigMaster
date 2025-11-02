import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        trig: {
          bg: "#020617",
          card: "#0f172a"
        }
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(.8)", opacity: ".5" },
          "100%": { transform: "scale(1.4)", opacity: "0" }
        }
      }
    }
  },
  plugins: [],
};

export default config;
