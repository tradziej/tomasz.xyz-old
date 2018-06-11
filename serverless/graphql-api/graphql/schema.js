'use strict'

const graphql = require('graphql');
const query = require('./query');

module.exports = new graphql.GraphQLSchema({ query });