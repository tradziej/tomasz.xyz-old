'use strict';

const instagramApi = require('instagram-node').instagram();

instagramApi.use({
  client_id: process.env.INSTAGRAM_CLIENT_ID,
  client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
  access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
});

module.exports = instagramApi;
