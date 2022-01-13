module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    boxShadow: {
      card: '0 2px 6px 0 rgba(0,0,0,0.1)',
      odds: '2px 2px 6px 0 rgba(0,0,0,0.05)',
      button: '2px 2px 6px 0 rgba(0,0,0,0.05)',
      language: '0px 0px 2px 2px rgba(0,0,0,0.05)',
      none: 'none',
    },
    screens: {
      md: '1280px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primitives: {
          light: {
            'primary-01': {
              primary: '#333333',
              secondary: '#666666',
              tertiary: '#999999',
              icon: '#BBBBBB',
              disable: '#DDDDDD',
              white: '#FFFFFF',
            },
          },
        },
        foundation: {
          primary: {
            1: '#4C9EEA',
            2: '#75BCFF',
            hover: {
              1: '#75BCFF',
              2: '#B8DDFF',
            },
            active: {
              1: '#3A7FC1',
              2: '#1D7BD4',
            },
          },
          negative: '#CB0202',
          warning: '#FFB500',
          positive: '#80B100',
        },
        background: {
          overlay: 'rgba(0,0,0,0.5)',
        },
        border: {
          button: {
            normal: '#4C9EEA',
            highlight: '#EEEEEE',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
