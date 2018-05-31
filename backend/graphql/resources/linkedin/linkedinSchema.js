'use strict'

const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'LinkedinData',
  fields: () => ({
    connections: { type: GraphQLString },
    url: { type: GraphQLString },
    name: { type: GraphQLString },
  })
});