import { injectGlobal } from 'styled-components'
import { theme } from './theme'
import 'typeface-source-sans-pro/index.css'

export const globalStyles = () => injectGlobal`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
  html {
    background: ${theme.colors.feta};
    color: ${theme.colors.midnight};
  }
  ::selection {
    color: ${theme.colors.feta};
    background-color: rgba(1, 22, 39, 0.996);
  }
  ::-moz-selection {
    color: ${theme.colors.feta};
    background: ${theme.colors.midnight};
  }
  img::selection {
    background-color: rgba(1, 22, 39, 0.5);
  }
`