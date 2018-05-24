'use strict'

const { GraphQLString } = require('graphql');

const twitterQuery = require('./twitter/twitterQuery');
const linkedinQuery = require('./linkedin/linkedinQuery');

module.exports = {
  skills: { type: GraphQLString },
  description: { type: GraphQLString },
  twitter: twitterQuery,
  linkedin: linkedinQuery
}