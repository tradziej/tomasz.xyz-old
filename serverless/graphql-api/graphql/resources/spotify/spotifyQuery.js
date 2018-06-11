'use strict'

const { GraphQLString } = require('graphql');
const spotifyApi = require('../../../models/spotify');
const SpotifyRecentlyPlayed = require('./spotifySchema');

const spotifyQuery = {
  type: SpotifyRecentlyPlayed,
  resolve: () => {
    return spotifyApi.then(api => {
      return api.getMyRecentlyPlayedTracks({ limit: 1 }).then(response => {
        return response.body;
      }, err => {
        console.log('Something went wrong!', err);
      });
    }, err => {
      console.log('Something went wrong!', err);
    });
  }
}

module.exports = spotifyQuery;