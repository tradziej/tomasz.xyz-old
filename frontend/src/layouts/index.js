import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'

import 'typeface-source-sans-pro/index.css'
import { background, selection, boulder } from './../styles/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
  html {
    background: ${background};
    color: ${selection};
  }
  ::selection {
    color: ${background};
    background-color: rgba(1, 22, 39, 0.996);
  }
  ::-moz-selection {
    color: ${background};
    background: ${selection};
  }
  img::selection {
    background-color: rgba(1, 22, 39, 0.5);
  }
`

const Container = styled.div`
  height: 100%;
  width: 650px;
  margin: 0 auto;
  padding-top: 20px;
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`

const Line = styled.hr`
  color: ${boulder};
  background-color: ${boulder};
  text-align: center;
  margin: 15px auto;
  width: 60%;
  border: none;
`


const Layout = ({ children, data }) => (
  <Container>
    <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.apiGraphQl.description} />
    <main>
      {children()}
      <Line />
    </main>
    <Footer email={data.apiGraphQl.email} />
  </Container>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export const query = graphql`
  query siteMetadataQuery {
    site {
      siteMetadata {
        title
      }
    }
    apiGraphQl {
      description
      email
    }
  }
`
