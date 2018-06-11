'use strict'

const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Keybase',
  fields: () => ({
    username: { type: GraphQLString },
    url: { type: GraphQLString },
  })
});