import React, { Component } from 'react';
import pluralize from 'pluralize';

import {
  DataListElement,
  Details,
  InstagramPhotos,
  NavLink,
} from '@components';

class Resume extends Component {
  render() {
    const { query, animation, transitionDelay } = this.props;

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Instagram</strong>:{' '}
          <NavLink href={query.user.url}>{query.user.username}</NavLink>
        </div>
        <Details>
          {query.user.media_count} {pluralize('photo', query.user.media_count)},
          a few recent:
        </Details>
        <InstagramPhotos photos={query.medias} />
      </DataListElement>
    );
  }
}

export default Resume;
