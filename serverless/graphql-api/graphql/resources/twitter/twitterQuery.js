'use strict'

const { GraphQLString } = require('graphql');
const twitter = require('../../../models/twitter');
const TwitterUserType = require('./twitterSchema');

const getUserByScreenName = (screen_name) => {
  return new Promise((resolve, reject) => {
    twitter.get('users/show', { screen_name }, (error, user, raw) => {
      if (error) {
        console.error(error.message);
        return reject(error);
      }
      return resolve(user);
    })
  })
}

const twitterQuery = {
  type: TwitterUserType,
  args: {
    screen_name: { type: GraphQLString }
  },
  resolve: (root, args) => {
    const { screen_name } = args;
    return getUserByScreenName(screen_name);
  }
}

module.exports = twitterQuery;