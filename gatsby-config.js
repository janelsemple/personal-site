/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Janel Semple`,
    description: `This is a personal website for Janel Semple, come say hello!`,
    author: `@janelsemple`,
  },
  plugins: [
    // First plugin: gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#be7730`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // Second plugin: gatsby-plugin-google-fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins:400,400i,700, 100`, // Normal 400, Italic 400, Bold 700 for Poppins
          `Roboto Mono:700` // Bold 700 for Roboto Mono
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }
  ],
}
