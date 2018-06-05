import styled from 'styled-components';

import { boulder } from '../styles/colors';
import { rhythm } from '../utils/typography';

const Time = styled.time`
  display: block;
  color: ${boulder};
  font-size: ${rhythm(4 / 7)};
  line-height: ${rhythm(3 / 5)};
`;

export default Time;