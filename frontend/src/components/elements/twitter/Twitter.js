import React, { Component } from 'react';
import pluralize from 'pluralize';

import { DataListElement, Details, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query, animation, transitionDelay } = this.props;

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Twitter</strong>:{' '}
          <NavLink href={query.url}>{query.username}</NavLink>
        </div>
        <Details>
          {query.statuses_count} {pluralize('tweet', query.statuses_count)}
        </Details>
      </DataListElement>
    );
  }
}

export default Resume;
