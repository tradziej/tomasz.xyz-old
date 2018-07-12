import React, { Component } from 'react';

import { DataListElement, Details, NavLink } from '@components';

class Resume extends Component {
  render() {
    const { query, animation, transitionDelay } = this.props;

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
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
      </DataListElement>
    );
  }
}

export default Resume;
