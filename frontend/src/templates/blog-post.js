import React from 'react';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';
import { StyledLink, NavLink } from '@components';

const PostedTime = styled.p`
  ${{ ...scale(-1 / 5) }};
  display: block;
  margin-bottom: ${rhythm(1)};
`;

const Content = styled.div`
  color: ${props => props.theme.colors.martinique};
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.midnight};
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
  let title;

  if (post.frontmatter.link) {
    title = (
      <Title>
        <NavLink href={post.frontmatter.link}>
          {post.frontmatter.title} &#8594;
        </NavLink>
      </Title>
    );
  } else {
    title = <Title>{post.frontmatter.title}</Title>;
  }

  return (
    <Content>
      <Back>
        <StyledLink to="/blog">&larr; List</StyledLink>
      </Back>
      {title}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostedTime>Posted {post.frontmatter.date}</PostedTime>
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
        link
      }
    }
  }
`;
