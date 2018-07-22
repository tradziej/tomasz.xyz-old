import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Footer = styled.footer`
  text-align: center;
  line-height: 22px;
`;

export default () => (
  <Footer>
    <div>
      <OutboundLink href="mailto:tomasz@radziejewski.pl">
        tomasz@radziejewski.pl
      </OutboundLink>
    </div>
    <div>the best way to contact me</div>
  </Footer>
);
