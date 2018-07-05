'use strict';

const graphql = require('graphql');
const queryFields = require('./resources');

module.exports = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => queryFields,
});
