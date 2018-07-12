import React, { Component } from 'react';
import { Details, ListWithMore } from '@components';

class Books extends Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        <div>
          <strong>Books</strong>:
        </div>
        <Details>
          <ListWithMore elements={books} />
        </Details>
      </div>
    );
  }
}

export default Books;
