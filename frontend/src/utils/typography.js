import Typography from 'typography';
import { theme } from '@styles';

const {
  colors: { midnight, greenPea },
} = theme;

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
    a: {
      color: greenPea,
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
  }),
});
