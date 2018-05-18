const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    description: String,
    skills: String
  }
`);

module.exports = schema;