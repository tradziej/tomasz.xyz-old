import React, { Component } from 'react';

import { NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query } = this.props;
    return (
      <div>
        <strong>Resume</strong>:{' '}
        <NavLink href={query.url}>{query.format}</NavLink>
      </div>
    );
  }
}

export default Resume;
