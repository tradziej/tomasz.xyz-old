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
    screen_name: { type: GraphQLString },
    followers_count: { type: GraphQLInt },
    friends_count: { type: GraphQLInt },
    listed_count: { type: GraphQLInt },
    favourites_count: { type: GraphQLInt },
    statuses_count: { type: GraphQLInt },
  })
});