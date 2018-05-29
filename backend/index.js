const express = require('express');
const config = require('./config');
const graphqlHTPP = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();

app.use('/', graphqlHTPP({
  schema,
  graphiql: true
}));

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Running on port ${port}`));