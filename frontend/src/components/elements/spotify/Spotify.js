import React, { Component } from 'react';

import { Details, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query } = this.props;

    return (
      <div>
        <div>
          <strong>Spotify</strong>:
        </div>
        <Details>
          Recently played track:{' '}
          <NavLink href={query.track.url}>{query.track.name}</NavLink> by{' '}
          {query.artists
            .map(artist => {
              return (
                <NavLink key={artist.id} href={artist.url}>
                  {artist.name}
                </NavLink>
              );
            })
            .reduce((accu, el) => {
              return accu == null ? [el] : [...accu, ', ', el];
            }, null)}
        </Details>
      </div>
    );
  }
}

export default Resume;
