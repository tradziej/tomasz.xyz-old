import React, { Component } from 'react';

import { NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query } = this.props;

    return (
      <div>
        <strong>Keybase</strong>:{' '}
        <NavLink href={query.url}>{query.username}</NavLink>
      </div>
    );
  }
}

export default Resume;
