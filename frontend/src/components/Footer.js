import React from 'react'
import styled from 'styled-components'

import NavLink from '../components/NavLink'

const Footer = styled.footer`
  text-align: center;
  line-height: 22px;
`

export default () => (
  <Footer>
    <div>
      <NavLink href="mailto:tomasz@radziejewski.pl">tomasz@radziejewski.pl</NavLink>
    </div>
    <div>the best way to contact me</div>
  </Footer>
)
