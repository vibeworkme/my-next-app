/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        deep: "#111827",
        light: "#f3f4f6",
        brand: "#3b82f6",
        olive: "#d1fae5"
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    }
  },
  plugins: []
}
