import Typography from 'typography'

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyColor: '#011627',
  headerFontFamily: [
    'Source Sans Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Source Sans Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    h1: {
      marginBottom: rhythm(1 / 2),
    },
  }),
})
