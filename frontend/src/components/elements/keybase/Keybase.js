import React, { Component } from 'react';

import { DataListElement, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query, animation, transitionDelay } = this.props;

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Keybase</strong>:{' '}
          <NavLink href={query.url}>{query.username}</NavLink>
        </div>
      </DataListElement>
    );
  }
}

export default Resume;
