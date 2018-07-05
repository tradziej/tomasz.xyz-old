'use strict';

const simpledb = require('aws-sdk/clients/simpledb');

const sdb = new simpledb({
  region: process.env.REGION,
  endpoint: 'https://sdb.amazonaws.com',
});

function getSpotifyCredentials() {
  return new Promise(function(resolve, reject) {
    sdb.getAttributes(
      {
        DomainName: process.env.SDB_DOMAIN,
        ItemName: 'spotify',
      },
      function(err, resp) {
        if (err) {
          return reject(err);
        } else {
          const attributes = {};
          resp.Attributes.forEach(function(attr) {
            attributes[attr.Name] = attr.Value;
          });
          return resolve(attributes);
        }
      }
    );
  });
}

function updateSpotifyCredentials(credentials) {
  return new Promise(function(resolve, reject) {
    sdb.putAttributes(
      {
        DomainName: process.env.SDB_DOMAIN,
        ItemName: 'spotify',
        Attributes: credentialsToUpdate(credentials),
      },
      function(err, resp) {
        if (err) {
          return reject(err);
        } else {
          return resolve(resp);
        }
      }
    );
  });
}

function credentialsToUpdate(credentials) {
  let creds = [];

  Object.keys(credentials).forEach(function(attrName) {
    creds.push({
      Name: attrName,
      Value: credentials[attrName],
      Replace: true,
    });
  });

  return creds;
}

module.exports = {
  getSpotifyCredentials,
  updateSpotifyCredentials,
};
