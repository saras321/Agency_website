/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C2BD9",
        accent: "#3B82F6",
        success: "#10B981",
        background: "#0A0A0F",
        surface: "#111827",
        textPrimary: "#F9FAFB",
        textMuted: "#9CA3AF",
        borderDark: "rgba(255, 255, 255, 0.08)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
