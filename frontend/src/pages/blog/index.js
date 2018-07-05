import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import { StyledLink, Time } from '@components';

const PostListTitle = styled.h2`
  font-size: ${rhythm(2 / 3)};
`;

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          return (
            <div key={post.id}>
              <Time>{post.frontmatter.date}</Time>
              <StyledLink to={post.fields.slug}>
                <PostListTitle>{post.frontmatter.title}</PostListTitle>
              </StyledLink>
            </div>
          );
        })}
    </div>
  );
};

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
