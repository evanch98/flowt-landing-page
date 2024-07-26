import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '3xl': ['2rem', { lineHeight: '110%' }],
        '4xl': ['2.5rem', { lineHeight: '110%' }],
        '6xl': ['3.5rem', { lineHeight: '110%' }],
      },
    },
    boxShadow: {
      'xs': '0 0 2px 0 rgb(0 0 0 / 0.07)',
      'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 0 2px 0 rgb(0 0 0 / 0.07)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 4px 0 rgb(0 0 0 / 0.07)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 0 6px 0 rgb(0 0 0 / 0.07)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 0 10px 0 rgb(0 0 0 / 0.07)',
      '2xl':
        '0 25px 50px -12px rgb(0 0 0 / 0.25), 0 0 15px 0 rgb(0 0 0 / 0.07)',
      'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
    },
    colors: {
      neutral: {
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
      },
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
export default config;
