// eslint-disable-next-line no-undef
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    enabled: true,
    content: ['./src/*.js' ,'./src/*.jsx' ,'./src/**/*.jsx', './src/**/**/*.jsx']
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#0095f6'
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
};
