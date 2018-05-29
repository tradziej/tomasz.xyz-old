'use strict'

const {
  GraphQLObjectType,
  GraphQLFloat,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Endomondo',
  description: 'Information about last Endomondo Workouts',
  fields: {
    distance_km: {
      type: GraphQLFloat,
      resolve: (root) => {
        return parseFloat(root);
      }
    },
  },
});