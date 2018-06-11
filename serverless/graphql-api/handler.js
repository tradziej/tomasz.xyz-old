'use strict';

const { graphql } = require('graphql');
const schema = require('./graphql/schema');

module.exports.query = (event, context, callback) => {
  const { query, variables } = JSON.parse(event.body);

  graphql(schema, query, null, context, variables)
    .then(
      result => callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(result)
      }),
      err => callback(err)
    );
};