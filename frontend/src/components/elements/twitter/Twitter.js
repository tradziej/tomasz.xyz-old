import React, { Component } from 'react';
import pluralize from 'pluralize';

import { Details, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query } = this.props;

    return (
      <div>
        <div>
          <strong>Twitter</strong>:{' '}
          <NavLink href={query.url}>{query.username}</NavLink>
        </div>
        <Details>
          {query.statuses_count} {pluralize('tweet', query.statuses_count)}
        </Details>
      </div>
    );
  }
}

export default Resume;
