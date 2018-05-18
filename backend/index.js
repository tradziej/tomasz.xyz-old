const express = require('express');
const graphqlHTPP = require('express-graphql');
const schema = require('./schema');
const config = require('./config');

const app = express();

const root = {
  description: () => "Independent Full Stack Software Engineer",
  skills: () => "Ruby, JavaScript, HTML, Git"
};

app.use('/', graphqlHTPP({
  schema,
  rootValue: root,
  graphiql: true
}));

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Running on port ${port}`));