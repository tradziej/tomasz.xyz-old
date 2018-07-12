import React, { Component } from 'react';
import pluralize from 'pluralize';

import { Details, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query } = this.props;
    const {
      username,
      url,
      repositories_languages_count,
      repositories_count,
      source_repositories_url,
      source_repositories_count,
    } = query;

    return (
      <div>
        <div>
          <strong>Github</strong>: <NavLink href={url}>{username}</NavLink>
        </div>
        <Details>
          {repositories_count} {pluralize('repository', repositories_count)} in{' '}
          {repositories_languages_count}{' '}
          {pluralize('language', repositories_languages_count)} (<NavLink
            href={source_repositories_url}
          >
            {source_repositories_count} sources
          </NavLink>)
        </Details>
      </div>
    );
  }
}

export default Resume;
