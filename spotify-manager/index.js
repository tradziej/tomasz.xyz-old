const config = require('./config');
const simpledb = require('aws-sdk/clients/simpledb');
const spotifyWebApi = require('spotify-web-api-node');

const sdb = new simpledb({
  region: process.env.AWS_REGION,
  endpoint: 'https://sdb.amazonaws.com',
});

const spotifyApi = new spotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

function getSpotifyCredentials() {
  return new Promise(function (resolve, reject) {
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
        resolve(attributes);
      }
    });
  });
}

function credentialsToUpdate(credentials) {
  let creds = [];

  Object.keys(credentials).forEach(function (attrName) {
    creds.push({
      Name: attrName,
      Value: credentials[attrName],
      Replace: true,
    });
  });

  return creds;
}

function updateSpotifyCredentials(credentials) {
  return new Promise(function (resolve, reject) {
    sdb.putAttributes({
      DomainName: process.env.SDB_DOMAIN,
      ItemName: 'spotify',
      Attributes: credentialsToUpdate(credentials),
    }, function (err, resp) {
      if (err) {
        return reject(err);
      } else {
        resolve(resp);
      }
    });
  });
}

getSpotifyCredentials().then(function (credentials) {
  const spotifyApi = new spotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    accessToken: credentials.spotifyAccessToken,
    refreshToken: credentials.spotifyRefreshToken,
  });

  spotifyApi.refreshAccessToken().then(
    function (data) {
      if (data.body['access_token']) {
        credentials['spotifyAccessToken'] = data.body['access_token'];
        updateSpotifyCredentials(credentials);
      }
    },
    function (err) {
      console.log('Could not refresh access token', err);
    }
  );
});