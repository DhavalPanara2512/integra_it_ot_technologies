/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        integra: {
          navy: "#08101d",
          blue: "#0ea5e9",
          sky: "#38bdf8",
          slate: "#cbd5e1",
          line: "rgba(255, 255, 255, 0.1)",
          orange: "#ee8c22",
          cloud: "#060c17",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        panel: "0 24px 60px rgba(9, 26, 47, 0.10)",
        card: "0 18px 40px rgba(9, 26, 47, 0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.28" },
          "50%": { opacity: "0.72" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "pulse-line": "pulseLine 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

