/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, personal palette
        primary: {
          50: '#fdf8f6',
          100: '#f9ede8',
          200: '#f3ddd3',
          300: '#e9c4b4',
          400: '#dba18a',
          500: '#c9785c',
          600: '#b85d42',
          700: '#9a4a35',
          800: '#7f3f30',
          900: '#6a372c',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf5ec',
          300: '#f5ece0',
          400: '#ebe0d0',
        },
        sage: {
          500: '#7c9082',
          600: '#668572',
          700: '#526b5c',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
