import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const StyledLink = styled(OutboundLink)`
  color: ${props => props.theme.colors.greenPea};
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &: hover {
    text-decoration: underline;
  }
`;

const NavLink = ({ href, children }) => (
  <StyledLink href={href}>{children}</StyledLink>
);

NavLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default NavLink;
