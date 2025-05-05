import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#A47C6F',
        light: '#F8F4ED',
        olive: '#C7C8A9',
        deep: '#5A4E4D',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 