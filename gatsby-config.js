/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `PayAPI`,
    description: `Start building with our APIs for absolutely free.`,
    author: `@scotttttjames`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/Typography`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
