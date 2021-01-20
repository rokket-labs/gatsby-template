const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Rokket Labs' Gatsby starter`,
    description: `Now with Typescript, Chakra UI and Apollo Client preconfigured.`,
    author: `Rokket Labs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, 'src'),
      },
    },
    `gatsby-plugin-graphql-loader`,
  ],
}
