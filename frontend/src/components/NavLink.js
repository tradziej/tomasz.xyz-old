import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { primary } from './../styles/colors'

const StyledLink = styled(OutboundLink) `
  color: ${primary};
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &: hover {
    text-decoration: underline;
  }
`

const NavLink = ({ href, children }) => (
  <StyledLink href={href}>
    {children}
  </StyledLink>
)

export default NavLink
