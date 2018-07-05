'use strict';

const sdb = require('./core/sdb');
const spotifyWebApi = require('spotify-web-api-node');

module.exports.process = (event, context, callback) => {
  sdb.getSpotifyCredentials().then(
    credentials => {
      const spotifyApi = new spotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        accessToken: credentials.spotifyAccessToken,
        refreshToken: credentials.spotifyRefreshToken,
      });

      spotifyApi.refreshAccessToken().then(
        function(data) {
          if (data.body['access_token']) {
            credentials['spotifyAccessToken'] = data.body['access_token'];
            sdb.updateSpotifyCredentials(credentials).then(() => {
              callback(null, {
                statusCode: 200,
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  message: 'Successfully refreshed access token.',
                }),
              });
            });
          }
        },
        err => {
          console.log('Could not refresh access token', err);
          callback(new Error("Couldn't refresh access token."), null);
          return;
        }
      );
    },
    err => {
      console.log('Could not refresh access token', err);
      callback(new Error("Couldn't refresh access token."), null);
      return;
    }
  );
};
