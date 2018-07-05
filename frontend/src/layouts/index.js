import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { globalStyles, theme } from '@styles';
import { Header, Footer } from '@components';

// Injecting global styles
globalStyles();

const Container = styled.div`
  height: 100%;
  width: 650px;
  margin: 0 auto;
  padding-top: 20px;
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

const Line = styled.hr`
  color: ${theme.colors.boulder};
  background-color: ${theme.colors.boulder};
  text-align: center;
  margin: 15px auto;
  width: 60%;
  border: none;
`;

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.apiGraphQl.description}
      />
      <main>
        {children()}
        <Line />
      </main>
      <Footer email={data.apiGraphQl.email} />
    </Container>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

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
`;
