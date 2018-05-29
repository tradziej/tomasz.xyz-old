'use strict'

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const instagramApi = require('../../../models/instagram');
const user = '37009017'; //tom3kr

let InstagramUser = new GraphQLObjectType({
  name: 'InstagramUser',
  description: 'Information about Instagram User',
  fields: {
    name: {
      type: GraphQLString,
      resolve: user => {
        return user.username;
      }
    },
    url: {
      type: GraphQLString,
      resolve: user => {
        return `https://www.instagram.com/${user.username}`;
      }
    },
    media_count: {
      type: GraphQLInt,
      resolve: user => {
        return parseInt(user.counts.media);
      }
    },
  }
});

let InstagramMedia = new GraphQLObjectType({
  name: 'InstagramMedia',
  description: 'Information about Instagram Media',
  fields: {
    url: {
      type: GraphQLString,
      resolve: media => {
        return media.link;
      }
    },
    src: {
      type: GraphQLString,
      resolve: media => {
        return media.images.standard_resolution.url;
      }
    },
  }
});

module.exports = new GraphQLObjectType({
  name: 'InstagramRecentlyAdded',
  description: 'Information about latest Instagram Medias',
  fields: () => ({
    medias: {
      type: new GraphQLList(InstagramMedia),
      resolve: () => {
        return new Promise((resolve, rejcet) => {
          instagramApi.user_media_recent(user, { count: 5 }, (err, media, pagination, remaining, limit) => {
            if (err) {
              console.log(err);
              rejcet(err);
            }

            resolve(media);
          });
        });
      }
    },
    user: {
      type: InstagramUser,
      resolve: () => {
        return new Promise((resolve, reject) => {
          instagramApi.user(user, (err, user) => {
            if (err) {
              console.log(err);
              reject(err);
            }

            resolve(user);
          });
        });
      }
    },
  })
});