'use strict'

const { GraphQLString } = require('graphql');

const twitterQuery = require('./twitter/twitterQuery');

module.exports = {
  skills: { type: GraphQLString },
  description: { type: GraphQLString },
  twitter: twitterQuery
}