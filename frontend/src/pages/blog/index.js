import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import { StyledLink, Time } from '@components';
import { transitions } from '@styles';

const PostListTitle = styled.h2`
  font-size: ${rhythm(2 / 3)};
`;

const Container = styled.div`
  ${transitions.fadeUp};
`;

class BlogIndex extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;

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
    const { edges: posts } = this.data.allMarkdownRemark;

    return (
      <div>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            return (
              <Container
                key={post.id}
                animation={animation}
                transitionDelay={200 + index * 150}
              >
                <Time>{post.frontmatter.date}</Time>
                <StyledLink to={post.fields.slug}>
                  <PostListTitle>{post.frontmatter.title}</PostListTitle>
                </StyledLink>
              </Container>
            );
          })}
      </div>
    );
  }
}

export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogIndex;
