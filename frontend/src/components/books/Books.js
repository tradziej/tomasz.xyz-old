import React, { Component } from 'react';
import { DataListElement, Details, ListWithMore } from '@components';

class Books extends Component {
  render() {
    const { books, animation, transitionDelay } = this.props;
    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Books</strong>:
        </div>
        <Details>
          <ListWithMore elements={books} />
        </Details>
      </DataListElement>
    );
  }
}

export default Books;
