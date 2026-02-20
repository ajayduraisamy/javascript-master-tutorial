/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slateSoft: "#64748b",
        cream: "#f8f5ef",
        amberSoft: "#fbbf24",
        jade: "#0f766e"
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"DM Sans\"", "sans-serif"],
        mono: ["\"IBM Plex Mono\"", "monospace"]
      },
      boxShadow: {
        soft: "0 10px 35px -18px rgba(15, 23, 42, 0.35)",
        float: "0 18px 40px -20px rgba(15, 23, 42, 0.45)"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 0.45s ease-out"
      }
    }
  },
  plugins: []
};
