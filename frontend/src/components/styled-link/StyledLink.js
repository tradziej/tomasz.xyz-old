import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.greenPea};
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
