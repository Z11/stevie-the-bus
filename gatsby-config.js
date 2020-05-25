require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `Stevie The Photo Bus Website`,
    description: `Kick off your next event with Stevie.`,
    author: `Roberto Chupin`,
  },
  plugins: [
    // With this plugin, attributes you add in their component,
    // e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.
    // This is important not just for site viewers,
    // but also for SEO — title and description metadata stored in the document head is a
    // key component used by Google in determining placement in search results.
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Creates ImageSharp nodes from image types that are supported
    // by the Sharp image processing library and provides fields in their
    // GraphQL types for processing your images in a variety of ways
    // including resizing, cropping, and creating responsive images.
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stevie-the-photo-bus-website`,
        short_name: `Stevie`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -55,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: "steviethephotobus",
        accessToken: process.env.ACCESS_TOKEN,
        omitPrismicScript: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    `gatsby-plugin-playground`, ///___playground
    `gatsby-plugin-styled-components`,
  ],
}
