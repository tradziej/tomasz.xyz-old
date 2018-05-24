'use strict'

const { GraphQLString } = require('graphql');

const resumeQuery = require('./resume/resumeQuery');
const twitterQuery = require('./twitter/twitterQuery');
const linkedinQuery = require('./linkedin/linkedinQuery');

module.exports = {
  skills: { type: GraphQLString },
  description: { type: GraphQLString },
  resume: resumeQuery,
  twitter: twitterQuery,
  linkedin: linkedinQuery
}