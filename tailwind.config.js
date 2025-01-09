/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0837E5', // Deep blue
          light: '#2653F7',  // Slightly lighter for subtle highlights
          dark: '#062BB1',   // Very dark blue for contrast
        },
        secondary: {
          DEFAULT: '#EA580C', // Vibrant orange
          light: '#FB923C',  // Softer orange for hover or accents
          dark: '#C2410C',   // Rich, deeper orange for dark mode
        },
        danger: '#DC2626',    // Red for errors
        success: '#16A34A',   // Green for success
        warning: '#FACC15',   // Yellow for warnings

        // Base colors
        base: {
          white: '#FFFFFF',  // Pure white for light themes
          black: '#000000',  // Pure black for dark themes
          light: '#475263',  // Soft white for backgrounds
          dark: '#191919',   // Near-black for dark backgrounds
        },
      },
    },
  },
  plugins: [],
}