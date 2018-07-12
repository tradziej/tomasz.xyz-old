import React, { Component } from 'react';

import { Details, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query } = this.props;

    return (
      <div>
        <div>
          <strong>LinkedIn</strong>:{' '}
          <NavLink href={query.url}>{query.username}</NavLink>
        </div>
        <Details>{query.connections}</Details>
      </div>
    );
  }
}

export default Resume;
