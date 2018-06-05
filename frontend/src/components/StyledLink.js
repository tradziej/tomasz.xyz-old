import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { primary } from './../styles/colors';

const StyledLink = styled(Link) `
  color: ${primary};
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &: hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
