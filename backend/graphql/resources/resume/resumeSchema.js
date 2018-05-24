'use strict'

const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Resume',
  fields: () => ({
    format: { type: GraphQLString },
    url: { type: GraphQLString },
  })
});