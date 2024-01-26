require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Fairport Computers",
    siteTitleDefault: "Fairport Computers",
    siteUrl: "https://fairportcomputer.com/",
    siteDescription:
      "A local, verified computer sales and service company.",
    siteImage: "/default-og-image.jpg",
    instagram: "https://www.instagram.com/fairportcomputers/?fbclid=IwAR1xho7qc7x7P62YEwM-XzTCCQ48GXhdVcsCzJsVzo3bw58nIWKvo06d2zc",
    facebook: "https://www.facebook.com/p/Fairport-Computers-100064346310178/",
    twitter: ""
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
