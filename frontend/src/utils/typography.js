import Typography from 'typography'
import { midnight } from './../styles/colors'

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyColor: midnight,
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
