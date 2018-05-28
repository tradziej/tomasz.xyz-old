'use strict'

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

module.exports = spotifyApi