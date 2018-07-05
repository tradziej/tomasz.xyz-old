import React from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';

import { Age, NavLink, StyledLink, InstagramPhotos } from '../../components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const Details = styled.div`
  color: ${props => props.theme.colors.martinique};
`;

const Skills = ({ query }) => (
  <li>
    <div>
      <strong>Skills</strong>: {query}
    </div>
  </li>
);

const Resume = ({ query }) => (
  <li>
    <div>
      <strong>Resume</strong>:{' '}
      <NavLink href={query.url}>{query.format}</NavLink>
    </div>
  </li>
);

const Blog = ({ count }) => (
  <li>
    <div>
      <strong>Blog</strong>: <StyledLink to="/blog">here</StyledLink>
    </div>
    <Details>
      {count} {pluralize('post', count)}
    </Details>
  </li>
);

const LinkedIn = ({ query }) => (
  <li>
    <div>
      <strong>LinkedIn</strong>:{' '}
      <NavLink href={query.url}>{query.username}</NavLink>
    </div>
    <Details>{query.connections}</Details>
  </li>
);

const Github = ({ query }) => {
  const {
    username,
    url,
    repositories_languages_count,
    repositories_count,
    source_repositories_url,
    source_repositories_count,
  } = query;

  return (
    <li>
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
    </li>
  );
};

const Keybase = ({ query }) => (
  <li>
    <div>
      <strong>Keybase</strong>:{' '}
      <NavLink href={query.url}>{query.username}</NavLink>
    </div>
  </li>
);

const Twitter = ({ query }) => (
  <li>
    <div>
      <strong>Twitter</strong>:{' '}
      <NavLink href={query.url}>{query.username}</NavLink>
    </div>
    <Details>
      {query.statuses_count} {pluralize('tweet', query.statuses_count)}
    </Details>
  </li>
);

const Spotify = ({ query }) => (
  <li>
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
  </li>
);

const Endomondo = ({ query }) => (
  <li>
    <div>
      <strong>Endomondo</strong>:
    </div>
    <Details>
      {query.distance_km > 0
        ? `I run ${Number(query.distance_km).toFixed(2)}km this week`
        : "I didn't run this week"}
    </Details>
  </li>
);

const Instagram = ({ query }) => (
  <li>
    <div>
      <strong>Instagram</strong>:{' '}
      <NavLink href={query.user.url}>{query.user.username}</NavLink>
    </div>
    <Details>
      {query.user.media_count} {pluralize('photo', query.user.media_count)}, a
      few recent ones:
    </Details>
    <InstagramPhotos photos={query.medias} />
  </li>
);

const DataList = ({ apiGraphQl, blogPostsCount }) => (
  <List>
    <Age birthday="1989-11-14T14:00+02:00" />
    <Skills query={apiGraphQl.skills} />
    <Resume query={apiGraphQl.resume} />
    <Blog count={blogPostsCount} />
    <LinkedIn query={apiGraphQl.linkedin} />
    <Github query={apiGraphQl.github} />
    <Keybase query={apiGraphQl.keybase} />
    <Twitter query={apiGraphQl.twitter} />
    <Spotify query={apiGraphQl.spotify} />
    <Endomondo query={apiGraphQl.endomondo} />
    <Instagram query={apiGraphQl.instagram} />
  </List>
);

export default DataList;
