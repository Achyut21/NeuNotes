// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff3a3a',       // Vibrant red for primary actions
        secondary: '#212121',     // Dark gray/black for secondary elements
        background: '#f8f8f8',    // Light background
        text: '#333333',          // Main text color
        'text-light': '#666666',  // Secondary text color
        accent: '#ff6b6b',        // Lighter red for accents/hover states
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
