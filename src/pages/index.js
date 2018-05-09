import React from 'react'
import Head from '../components/Head'

import Main from '../components/Main'

const IndexPage = ({ data, location }) => (
  <div>
    <Head
      title={data.site.siteMetadata.title}
      description="Tomasz Radziejewski. Full Stack Software Engineer."
      keywords="Tomasz Radziejewski, Software Engineer, Remote, Software Developer, Ruby on Rails"
      location={location}
    />
    <Main />
  </div>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
