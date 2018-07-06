import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pluralize from 'pluralize';

import {
  Age,
  NavLink,
  StyledLink,
  InstagramPhotos,
  DataListElement,
} from '@components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const Details = styled.div`
  color: ${props => props.theme.colors.martinique};
`;

const Skills = ({ query, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>Skills</strong>: {query}
    </div>
  </DataListElement>
);

const Resume = ({ query, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>Resume</strong>:{' '}
      <NavLink href={query.url}>{query.format}</NavLink>
    </div>
  </DataListElement>
);

const Blog = ({ count, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>Blog</strong>: <StyledLink to="/blog">here</StyledLink>
    </div>
    <Details>
      {count} {pluralize('post', count)}
    </Details>
  </DataListElement>
);

const LinkedIn = ({ query, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>LinkedIn</strong>:{' '}
      <NavLink href={query.url}>{query.username}</NavLink>
    </div>
    <Details>{query.connections}</Details>
  </DataListElement>
);

const Github = ({ query, animation, transitionDelay }) => {
  const {
    username,
    url,
    repositories_languages_count,
    repositories_count,
    source_repositories_url,
    source_repositories_count,
  } = query;

  return (
    <DataListElement animation={animation} transitionDelay={transitionDelay}>
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
    </DataListElement>
  );
};

const Keybase = ({ query, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>Keybase</strong>:{' '}
      <NavLink href={query.url}>{query.username}</NavLink>
    </div>
  </DataListElement>
);

const Twitter = ({ query, animation, transitionDelay }) => (
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

const Spotify = ({ query, animation, transitionDelay }) => (
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

const Endomondo = ({ query, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>Endomondo</strong>:
    </div>
    <Details>
      {query.distance_km > 0
        ? `I run ${Number(query.distance_km).toFixed(2)}km this week`
        : "I didn't run this week"}
    </Details>
  </DataListElement>
);

const Instagram = ({ query, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>Instagram</strong>:{' '}
      <NavLink href={query.user.url}>{query.user.username}</NavLink>
    </div>
    <Details>
      {query.user.media_count} {pluralize('photo', query.user.media_count)}, a
      few recent ones:
    </Details>
    <InstagramPhotos photos={query.medias} />
  </DataListElement>
);

class DataList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: 'start' });
    });
  }

  render() {
    const { animation } = this.state;
    const { apiGraphQl, blogPostsCount } = this.props;

    return (
      <List>
        <Age
          birthday="1989-11-14T14:00+02:00"
          animation={animation}
          transitionDelay={400}
        />
        <Skills
          query={apiGraphQl.skills}
          animation={animation}
          transitionDelay={550}
        />
        <Resume
          query={apiGraphQl.resume}
          animation={animation}
          transitionDelay={700}
        />
        <Blog
          count={blogPostsCount}
          animation={animation}
          transitionDelay={850}
        />
        <LinkedIn
          query={apiGraphQl.linkedin}
          animation={animation}
          transitionDelay={1000}
        />
        <Github
          query={apiGraphQl.github}
          animation={animation}
          transitionDelay={1150}
        />
        <Keybase
          query={apiGraphQl.keybase}
          animation={animation}
          transitionDelay={1300}
        />
        <Twitter
          query={apiGraphQl.twitter}
          animation={animation}
          transitionDelay={1450}
        />
        <Spotify
          query={apiGraphQl.spotify}
          animation={animation}
          transitionDelay={1600}
        />
        <Endomondo
          query={apiGraphQl.endomondo}
          animation={animation}
          transitionDelay={1750}
        />
        <Instagram
          query={apiGraphQl.instagram}
          animation={animation}
          transitionDelay={2000}
        />
      </List>
    );
  }
}

DataList.propTypes = {
  apiGraphQl: PropTypes.object.isRequired,
  blogPostsCount: PropTypes.number.isRequired,
};

export default DataList;
