/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        brand: {
          cyan:   "#00D4FF",
          orange: "#FF6B35",
          blue:   "#0066FF",
        },
        surface: {
          bg:     "#0A0A0F",
          card:   "#12121A",
          border: "#1E1E2E",
        },
        ink: {
          primary:   "#F0F0F0",
          secondary: "#8888AA",
        },
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-18px)" },
        },
      },
      animation: {
        shimmer:    "shimmer 3.5s linear infinite",
        "float-a":  "float 5s ease-in-out infinite",
        "float-b":  "float 7s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
