'use strict'

const SpotifyWebApi = require('spotify-web-api-node');
const simpledb = require('aws-sdk/clients/simpledb');

const sdb = new simpledb({
  region: process.env.REGION,
  endpoint: 'https://sdb.amazonaws.com',
});

const spotifyApi = new Promise((resolve, reject) => {
  sdb.getAttributes({
    DomainName: process.env.SDB_DOMAIN,
    ItemName: 'spotify',
  }, function (err, resp) {
    if (err) {
      return reject(err);
    } else {
      const attributes = {};
      resp.Attributes.forEach(function (attr) {
        attributes[attr.Name] = attr.Value;
      });
      return resolve(new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        accessToken: attributes.spotifyAccessToken,
        refreshToken: attributes.spotifyRefreshToken,
      }));
    }
  });
});

module.exports = spotifyApi;