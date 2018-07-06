import { css } from 'styled-components';

const fadeUp = css`
  ${props =>
    props.animation !== 'start' &&
    `
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  `};
  transition: all 600ms
    ${props => (props.transitionDelay ? `${props.transitionDelay}ms` : '400ms')}
    cubic-bezier(0.694, 0.0482, 0.335, 1);
`;

export const transitions = {
  fadeUp,
};
