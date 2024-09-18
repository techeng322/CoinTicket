// eslint-disable-next-line @typescript-eslint/no-var-requires
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        ios: '320px',
        samsungS8: '360px',
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xls': '1350px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
    extend: {
      fontFamily: {
        poppins_semibold: ['Poppins-SemiBold', 'sans-serif'],
        poppins_regular: ['Poppins-Regular', 'sans-serif'],
        poppins_medium: ['Poppins-Medium', 'sans-serif'],
        poppins_bold: ['Poppins-Bold', 'sans-serif'],
        spaceGrotesk_medium: ['SpaceGrotesk-Medium', 'sans-serif'],
        poppins_blackitalic: ['Poppins-BlackItalic', 'sans-serif'],
      },
      colors: {
        grey: {
          DEFAULT: '#949494',
          light: '#f6f6f6',
        },
        blue: {
          DEFAULT: 'blue',
          light_100: '#e8eaef',
          light_200: '#d6ddf7',
        },
        background: {
          DEFAULT: '#f2e8cd',
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
}
