import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &.is-active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: none;
  }
`;

const Description = styled.section`
  padding-bottom: 20px;
`;

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <h1>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </h1>
    <Description>{siteDescription}</Description>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
};

export default Header;
