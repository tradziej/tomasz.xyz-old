const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql');

const twitter = require('./models/twitter');

const TwitterUserType = new GraphQLObjectType({
  name: 'TwitterUser',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    screen_name: { type: GraphQLString },
    followers_count: { type: GraphQLInt },
    friends_count: { type: GraphQLInt },
    listed_count: { type: GraphQLInt },
    favourites_count: { type: GraphQLInt },
    statuses_count: { type: GraphQLInt },
  })
})

const getUserByScreenName = (screen_name) => {
  return new Promise((resolve, reject) => {
    twitter.get('users/show', { screen_name }, (error, user, raw) => {
      if (error) {
        console.error(error.message);
        return reject(error);
      }
      return resolve(user);
    })
  })
}

const twitterQuery = {
  type: TwitterUserType,
  args: {
    screen_name: { type: GraphQLString }
  },
  resolve: (root, args) => {
    const { screen_name } = args;
    return getUserByScreenName(screen_name);
  }
}

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      skills: { type: GraphQLString },
      description: { type: GraphQLString },
      twitter: twitterQuery
    })
  })
})

module.exports = schema;