import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { rhythm } from '../../utils/typography';

const Underline = styled.div`
  content: '';
  display: block;
  margin: 0 -4px;
  height: 2px;
  position: absolute;
  transition: 0.2s background-color;
  width: 100%;
  background-color: ${props => props.theme.colors.greenPea};
`;

const Link = styled(OutboundLink)`
  color: ${props => props.theme.colors.martinique};
  display: inline-block;
  padding: 0 4px;
  line-height: ${rhythm(3 / 4)};
  text-align: center;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  background-size: 100% 200%;
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.feta} 50%,
    ${props => props.theme.colors.greenPea} 50%
  );
  -webkit-transition: background-position 0.3s;
  -moz-transition: background-position 0.3s;
  transition: background-position 0.3s;

  &:hover {
    text-decoration: none;
    color: white;
    background-position: 0 100%;
  }
`;

const NavLink = ({ href, target, onClick, children }) => (
  <Link
    href={href}
    target={target}
    onClick={e => {
      if (typeof onClick === `function`) {
        onClick();
      }
    }}
  >
    {children}
    <Underline />
  </Link>
);

NavLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default NavLink;
