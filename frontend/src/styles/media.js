import { css } from 'styled-components';

export const media = {
  phone: (...args) => css`
    @media (max-width: 599px) {
      ${css(...args)};
    }
  `,
};
