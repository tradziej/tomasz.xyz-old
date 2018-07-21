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

const PostHeader = styled.div`
  display: inline-flex;
  color: ${props => props.theme.colors.boulder};
  font-size: ${rhythm(4 / 7)};
  line-height: ${rhythm(3 / 5)};
`;

const PostCategory = styled.span`
  ::before {
    content: '; ';
  }
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
                transitionDelay={150 + index * 150}
              >
                <PostHeader>
                  <Time>{post.frontmatter.date}</Time>
                  <PostCategory>{post.frontmatter.category}</PostCategory>
                </PostHeader>
                <PostListTitle>
                  <StyledLink to={post.fields.slug}>
                    {post.frontmatter.title}
                  </StyledLink>
                </PostListTitle>
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
            category
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
