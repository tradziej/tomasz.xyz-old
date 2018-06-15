import React from 'react'
import styled from 'styled-components'

const domain = 'https://tomasz.xyz'

const HeaderLink = styled.a`
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
      <HeaderLink href={domain}>{siteTitle}</HeaderLink>
    </h1>
    <Description>{siteDescription}</Description>
  </header>
)

export default Header
