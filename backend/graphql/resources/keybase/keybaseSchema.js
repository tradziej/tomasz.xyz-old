'use strict'

const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Keybase',
  fields: () => ({
    login: { type: GraphQLString },
    url: { type: GraphQLString },
  })
});