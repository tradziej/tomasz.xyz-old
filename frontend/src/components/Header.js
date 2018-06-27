import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &.is-active {
    text-decoration: underline;
  }
`

const Description = styled.section`
  padding-bottom: 20px;
`

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <h1>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </h1>
    <Description>{siteDescription}</Description>
  </header>
)

export default Header
