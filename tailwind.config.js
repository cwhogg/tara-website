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
        // Berry Wine palette
        primary: {
          50: '#F5E8ED',
          100: '#E8CDD8',
          200: '#D4B8C4',
          300: '#B07A94',
          400: '#944066',
          500: '#7B2D52',  // Main accent
          600: '#5E2240',
          700: '#471832',
          800: '#331224',
          900: '#220C18',
        },
        cream: {
          50: '#FFFDFB',   // Cards, modals
          100: '#FAF8F6',  // Page background
          200: '#F3EFEB',  // Alt sections
          300: '#E8E4E0',  // Borders
          400: '#D9D4CE',  // Disabled
        },
        text: {
          primary: '#2D2A26',
          secondary: '#4A4744',
          muted: '#6B6660',
          subtle: '#9B9590',
        },
        success: {
          DEFAULT: '#4A6B4A',
          light: '#E8EDE5',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-libre-franklin)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
