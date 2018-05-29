'use strict'

const { GraphQLString } = require('graphql');

const resumeQuery = require('./resume/resumeQuery');
const keybaseQuery = require('./keybase/keybaseQuery');
const twitterQuery = require('./twitter/twitterQuery');
const linkedinQuery = require('./linkedin/linkedinQuery');
const githubQuery = require('./github/githubQuery');
const spotifyQuery = require('./spotify/spotifyQuery');
const endomondoQuery = require('./endomondo/endomondoQuery');
const instagramQuery = require('./instagram/instagramQuery');

module.exports = {
  skills: { type: GraphQLString },
  description: { type: GraphQLString },
  resume: resumeQuery,
  keybase: keybaseQuery,
  twitter: twitterQuery,
  linkedin: linkedinQuery,
  github: githubQuery,
  spotify: spotifyQuery,
  endomondo: endomondoQuery,
  instagram: instagramQuery,
}