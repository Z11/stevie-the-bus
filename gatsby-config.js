require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `Stevie the Photo Bus | Houston VW Bus Photo Booth`,
    description: `Stevie the Photo Bus is Houston’s grooviest photo booth experience. Our vintage 1977 VW Bus, Stevie, has a photo booth inside to capture memories that will last a lifetime, and add a nostalgic vibe to your event. She is available for all types of parties, weddings, and corporate events. Grab a couple of props and strike a pose! 
    We are a rental photo booth service in Houston and are fully prepared to make your event enjoyable and memorable. We will always have a technician onsite to set up the bus and attend your guests. The booth is easy to use so your guests can have fun taking pictures, and receive physical and digitals copies of their high-quality photos. 
    Aside from being a photobooth, Stevie can be used as a prop for your next video or photo shoot. We began this journey renting the bus to photographers for their photoshoots and we plan to continue that service. We are happy to work with models, photographers, brides, graduates, couples and more, to make your photos pop!`,
    twitterUsername: `@OhSnapItsRobe`,
    image: `/card-img.png`,
    keywords: `photo bus, houston photo bus, photo bus houston, wolkswagen photo bus, vw photo bus, volkswagen rental, vw rental`,
    siteUrl: `https://www.steviethephotobus.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/preview/`],
      }
    },
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
        offset: -100,
      },
    },
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
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
    // `gatsby-plugin-offline`,
  ],
}
