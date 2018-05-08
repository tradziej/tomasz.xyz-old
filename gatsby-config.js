module.exports = {
  siteMetadata: {
    title: 'Tomasz Radziejewski',
    description: 'Independent Full Stack Software Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-styled-components',
  ],
}
