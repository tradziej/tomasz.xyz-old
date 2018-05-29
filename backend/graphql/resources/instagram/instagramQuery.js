'use strict'

const { GraphQLString } = require('graphql');
const InstagramRecentlyAdded = require('./instagramSchema');

const instagramQuery = {
  type: InstagramRecentlyAdded,
  resolve: () => {
    return {};
  },
}

module.exports = instagramQuery;