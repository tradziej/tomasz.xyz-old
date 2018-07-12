import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Age,
  Skills,
  Availability,
  Resume,
  Blog,
  Linkedin,
  Github,
  Keybase,
  Twitter,
  Spotify,
  Books,
  Endomondo,
  Instagram,
} from '@components/elements';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`;

class DataList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: 'start' });
    });
  }

  render() {
    const { animation } = this.state;
    const { apiGraphQl } = this.props;
    const blogPostsCount = this.props.data.allMarkdownRemark.totalCount;
    const { skills, books } = this.props.data.site.siteMetadata;

    return (
      <List>
        <Age
          birthday="1989-11-14T14:00+02:00"
          animation={animation}
          transitionDelay={400}
        />
        <Skills skills={skills} animation={animation} transitionDelay={550} />
        <Availability
          available={true}
          animation={animation}
          transitionDelay={700}
        />
        <Resume
          query={apiGraphQl.resume}
          animation={animation}
          transitionDelay={850}
        />
        <Blog
          count={blogPostsCount}
          animation={animation}
          transitionDelay={1000}
        />
        <Linkedin
          query={apiGraphQl.linkedin}
          animation={animation}
          transitionDelay={1150}
        />
        <Github
          query={apiGraphQl.github}
          animation={animation}
          transitionDelay={1300}
        />
        <Keybase
          query={apiGraphQl.keybase}
          animation={animation}
          transitionDelay={1450}
        />
        <Twitter
          query={apiGraphQl.twitter}
          animation={animation}
          transitionDelay={1600}
        />
        <Spotify
          query={apiGraphQl.spotify}
          animation={animation}
          transitionDelay={1750}
        />
        <Books books={books} animation={animation} transitionDelay={1900} />
        <Endomondo
          query={apiGraphQl.endomondo}
          animation={animation}
          transitionDelay={2050}
        />
        <Instagram
          query={apiGraphQl.instagram}
          animation={animation}
          transitionDelay={2200}
        />
      </List>
    );
  }
}

DataList.propTypes = {
  apiGraphQl: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default DataList;
