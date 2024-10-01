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
          light_100: '#f6f6f6',
          light_200: '#707070',
          light_300: '#919191',
          light_400: '#9E9E9E',
          light_500: '#B5B5B5',
        },
        blue: {
          DEFAULT: 'blue',
          light_100: '#e8eaef',
          light_200: '#d6ddf7',
          light_300: '#F1F1F1',
          dark_100: '#0A1B36',
        },
        background: {
          DEFAULT: '#f2e8cd',
        },
        brown: {
          light_100: '#98572C',
          light_200: '#ffe8bd',
        },
        green: {
          light_100: '#00a83e',
        },
        white: '#FFFFFF',
        black: '#000000',
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
