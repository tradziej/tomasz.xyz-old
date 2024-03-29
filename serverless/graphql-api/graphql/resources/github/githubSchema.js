'use strict'

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Github',
  fields: () => ({
    username: { type: GraphQLString },
    url: { type: GraphQLString },
    repositories_count: { type: GraphQLInt },
    source_repositories_count: { type: GraphQLInt },
    source_repositories_url: { type: GraphQLString },
    repositories_languages_count: { type: GraphQLInt },
  })
});