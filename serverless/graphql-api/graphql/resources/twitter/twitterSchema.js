'use strict'

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'TwitterUser',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: {
      type: GraphQLString,
      resolve: (root) => {
        return root.screen_name;
      }
    },
    url: {
      type: GraphQLString,
      resolve: (root) => {
        return `https://twitter.com/${root.screen_name}`;
      }
    },
    screen_name: { type: GraphQLString },
    followers_count: { type: GraphQLInt },
    friends_count: { type: GraphQLInt },
    listed_count: { type: GraphQLInt },
    favourites_count: { type: GraphQLInt },
    statuses_count: { type: GraphQLInt },
  })
});