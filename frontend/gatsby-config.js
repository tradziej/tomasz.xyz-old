require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Tomasz Radziejewski',
    siteUrl: `${process.env.APP_URL}`,
    birthday: '1989-11-14T14:00+02:00',
    skills: [
      'Ruby (and Ruby on Rails)',
      'Node.js (and Express)',
      'JavaScript (Ember.js and React)',
      'HTML',
      'Git',
    ],
    books: [
      {
        value: '<cite>The Healthy Programmer</cite> by Joe Kutner',
        url:
          'https://www.goodreads.com/book/show/17229509-the-healthy-programmer',
      },
      {
        value: '<cite>JavaScript: The Good Parts</cite> by Douglas Crockford',
        url: 'https://www.goodreads.com/book/show/2998152-javascript',
      },
      {
        value: '<cite>The Road to learn React</cite> by Robin Wieruch',
        url:
          'https://www.goodreads.com/book/show/37503118-the-road-to-learn-react',
      },
      {
        value:
          '<cite>Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers</cite> by Timothy Ferriss',
        url: 'https://www.goodreads.com/book/show/31823677-tools-of-titans',
        featured: true,
      },
      {
        value:
          '<cite>Serverless Single Page Apps: Fast, Scalable, and Available</cite by Ben Rady',
        url:
          'https://www.goodreads.com/book/show/27755165-serverless-single-page-apps',
      },
      {
        value: '<cite>Steve Jobs</cite> by Walter Isaacson',
        url: 'https://www.goodreads.com/book/show/11084145-steve-jobs',
      },
      {
        value: '<cite>The Intelligent Investor</cite> by Benjamin Graham',
        url:
          'https://www.goodreads.com/book/show/106835.The_Intelligent_Investor',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'queries',
        path: `${__dirname}/src/queries/`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        url: process.env.GRAPHQL_API_URL,
        variables: {
          twitter_screen_name: 'tradziej',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: { draft: { ne: true } }}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tomasz Radziejewski',
        short_name: 'T.R.',
        start_url: '/',
        background_color: '#fbfef9',
        theme_color: '#fbfef9',
        display: 'standalone',
        icons: [
          {
            src: `/public/favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/public/favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
