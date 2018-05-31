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
    <Main apiGraphQl={data.apiGraphQl} />
  </div>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    apiGraphQl {
      skills
      description
      resume {
        format
        url
      }
      linkedin {
        username
        url
        connections
      }
      github {
        username
        url
        source_repositories_url
        repositories_count
        source_repositories_count
        repositories_languages_count
      }
      keybase {
        username
        url
      }
      twitter {
        username
        url
        screen_name
        statuses_count
      }
      spotify {
        track {
          name
          url
        }
        artists {
          id
          name
          url
        }
      }
      endomondo {
        distance_km
      }
      instagram {
        medias {
          url
          src
        }
        user {
          username
          url
          media_count
        }
      }
    }
  }
`
