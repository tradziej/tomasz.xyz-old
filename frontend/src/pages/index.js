import React, { Component } from 'react';
import axios from 'axios';

import { Head, DataList } from '@components';
import apiQuery from './../queries/api.graphql';

const api = axios.create({
  baseURL: process.env.GRAPHQL_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;
    this.location = props.location;

    this.state = {
      api: this.data.apiGraphQl,
    };

    this.onFetchApi = this.onFetchApi.bind(this);

    this.onFetchApi();
  }

  componentDidMount() {
    const threeMinutes = 1000 * 60 * 3;

    this.timer = setInterval(this.onFetchApi, threeMinutes);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onFetchApi() {
    api
      .post('', {
        query: apiQuery.loc.source.body,
        variables: {
          twitter_screen_name: 'tradziej',
        },
      })
      .then(res => {
        this.setState((prevState, props) => ({
          api: {
            ...prevState.api,
            ...res.data.data,
          },
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Head
          title={this.data.site.siteMetadata.title}
          description="Tomasz Radziejewski. Full Stack Software Engineer."
          keywords="Tomasz Radziejewski, Software Engineer, Remote, Software Developer, Ruby on Rails"
          location={this.location}
        />
        <DataList
          apiGraphQl={this.state.api}
          blogPostsCount={this.data.allMarkdownRemark.totalCount}
        />
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
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
          caption
        }
        user {
          username
          url
          media_count
        }
      }
    }
  }
`;
