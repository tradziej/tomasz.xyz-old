'use strict'

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

let SpotifyArtist = new GraphQLObjectType({
  name: 'SpotifyArtist',
  description: 'Information about a Spotify Artist',
  fields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
      resolve: (artist) => {
        return artist.name;
      }
    },
    url: {
      type: GraphQLString,
      resolve: (artist) => {
        return artist.external_urls.spotify;
      }
    },
  }
});

let SpotifyTrack = new GraphQLObjectType({
  name: 'SpotifyTrack',
  description: 'Information about a Spotify Track',
  fields: {
    name: {
      type: GraphQLString,
      resolve: (track) => {
        return track.name;
      }
    },
    url: {
      type: GraphQLString,
      resolve: (track) => {
        return track.external_urls.spotify;
      }
    },
  }
});

module.exports = new GraphQLObjectType({
  name: 'SpotifyRecentlyPlayed',
  description: 'Information about recently played Spotify Track',
  fields: () => ({
    artists: {
      type: new GraphQLList(SpotifyArtist),
      resolve: (root) => {
        return root.items[0].track.artists;
      }
    },
    track: {
      type: SpotifyTrack,
      resolve: (root) => {
        return root.items[0].track;
      }
    },
  })
});