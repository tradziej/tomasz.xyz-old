import React from 'react';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';
import { secondary, selection } from './../styles/colors';
import StyledLink from '../components/StyledLink';

const PostedTime = styled.p`
  ${{ ...scale(-1 / 5) }};
  display: block;
  margin-bottom: ${rhythm(1)};
`;

const Content = styled.div`
  color: ${secondary};
`;

const Title = styled.h2`
  color: ${selection};
  margin-bottom: ${rhythm(2 / 3)};
`;

const Back = styled.div`
  color: #666;
  float: right;
  position: relative;
  bottom: ${rhythm(1)};
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Content>
      <Back>
        <StyledLink to="/blog">&larr; List</StyledLink>
      </Back>
      <Title>{post.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostedTime>
        Posted {post.frontmatter.date}
      </PostedTime>
    </Content>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;