import React, { Component } from 'react';

import { DataListElement, Details, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query, animation, transitionDelay } = this.props;

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>LinkedIn</strong>:{' '}
          <NavLink href={query.url}>{query.username}</NavLink>
        </div>
        <Details>{query.connections}</Details>
      </DataListElement>
    );
  }
}

export default Resume;
