import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: #44b284;
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &: hover {
    text-decoration: underline;
  }
`

const NavLink = ({ href, children }) => (
  <StyledLink prefetch href={href}>
    {children}
  </StyledLink>
)

export default NavLink
