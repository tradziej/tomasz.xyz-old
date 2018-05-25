'use strict'

const { GraphQLString } = require('graphql');

const resumeQuery = require('./resume/resumeQuery');
const keybaseQuery = require('./keybase/keybaseQuery');
const twitterQuery = require('./twitter/twitterQuery');
const linkedinQuery = require('./linkedin/linkedinQuery');

module.exports = {
  skills: { type: GraphQLString },
  description: { type: GraphQLString },
  resume: resumeQuery,
  keybase: keybaseQuery,
  twitter: twitterQuery,
  linkedin: linkedinQuery
}