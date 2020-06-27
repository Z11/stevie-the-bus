require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `Stevie The Photo Bus Website`,
    description: `Kick off your next event with Stevie.`,
    twitterUsername: `@OhSnapItsRobe`,
    image: `/stevie-logo-twitter-card.png`,
    siteUrl: `https://www.steviethephotobus.com/`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.steviethephotobus.com/",
        sitemap: "https://www.steviethephotobus.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.steviethephotobus.com/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
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
        icon: `src/svgs/stevie-bus.svg`,
        cache_busting_mode: "none",
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
    // INSTALL IF NECESSARY TO CHECK BUNDLE SIZE
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //     disable: true,
    //   },
    // },
    // `gatsby-plugin-playground`, ///___playground
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
}
