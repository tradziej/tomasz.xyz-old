import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { transitions } from '@styles';
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

const Element = styled.li`
  ${transitions.fadeUp};
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

    const elements = [
      <Age birthday="1989-11-14T14:00+02:00" />,
      <Skills skills={skills} />,
      <Availability available={true} />,
      <Resume query={apiGraphQl.resume} />,
      <Blog count={blogPostsCount} />,
      <Linkedin query={apiGraphQl.linkedin} />,
      <Github query={apiGraphQl.github} />,
      <Keybase query={apiGraphQl.keybase} />,
      <Twitter query={apiGraphQl.twitter} />,
      <Spotify query={apiGraphQl.spotify} />,
      <Books books={books} />,
      <Endomondo query={apiGraphQl.endomondo} />,
      <Instagram query={apiGraphQl.instagram} />,
    ];

    return (
      <List>
        {elements.map((element, index) => {
          return (
            <Element
              animation={animation}
              key={index}
              transitionDelay={400 + 150 * index}
            >
              {element}
            </Element>
          );
        })}
      </List>
    );
  }
}

DataList.propTypes = {
  apiGraphQl: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default DataList;
