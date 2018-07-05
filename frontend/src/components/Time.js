import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const Time = styled.time`
  display: block;
  color: ${props => props.theme.colors.boulder};
  font-size: ${rhythm(4 / 7)};
  line-height: ${rhythm(3 / 5)};
`;

export default Time;