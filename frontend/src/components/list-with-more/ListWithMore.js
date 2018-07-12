import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NavLink } from '@components';

const Wrapper = styled.div``;

const StyledUl = styled.ul`
  margin-bottom: 0px;
`;

const List = ({ children }) => <StyledUl>{children.reverse()}</StyledUl>;

const Item = styled.li`
  margin-bottom: 0px;
  ${({ featured }) =>
    featured &&
    `
    font-weight: 550;
  `};
`;

const StyledButton = styled.button`
  color: ${props => props.theme.colors.greenPea};
`;

class ListWithMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      more: false,
    };

    this.handleMore = this.handleMore.bind(this);
  }

  render() {
    const { elements, max } = this.props;
    const { more } = this.state;
    let items = elements;

    if (!more) {
      items = items.slice(-max);
    }

    const itemArray = items.map((el, index) => {
      let item;

      if (el.url) {
        item = (
          <Item featured={el.featured} key={index}>
            <NavLink
              href={el.url}
              dangerouslySetInnerHTML={{ __html: el.value }}
            />
          </Item>
        );
      } else {
        item = (
          <Item
            featured={el.featured}
            dangerouslySetInnerHTML={{ __html: el.value }}
            key={index}
          />
        );
      }
      return item;
    });

    return (
      <Wrapper>
        <List>{itemArray}</List>
        {!more && <StyledButton onClick={this.handleMore}>more</StyledButton>}
      </Wrapper>
    );
  }

  handleMore() {
    this.setState({ more: !this.state.more });
  }
}

ListWithMore.propTypes = {
  elements: PropTypes.array.isRequired,
  max: PropTypes.number,
};

ListWithMore.defaultProps = {
  elements: [],
  max: 3,
};

export default ListWithMore;
