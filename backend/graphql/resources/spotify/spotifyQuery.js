'use strict'

const { GraphQLString } = require('graphql');
const spotifyApi = require('../../../models/spotify');
const SpotifyRecentlyPlayed = require('./spotifySchema');

const spotifyQuery = {
  type: SpotifyRecentlyPlayed,
  resolve: () => {
    return spotifyApi.getMyRecentlyPlayedTracks({
      limit: 1
    }).then(function (response) {
      return response.body;
    }, function (err) {
      console.log('Something went wrong!', err);
    });
  }
}

module.exports = spotifyQuery;