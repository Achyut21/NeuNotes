// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        accent: 'var(--accent)',
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
