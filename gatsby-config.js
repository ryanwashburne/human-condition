module.exports = {
  siteMetadata: {
    title: 'HUMAN CONDITION',
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `mcc9em3lbxey`,
        accessToken: `5cb3210278629e6dad812ff7256f41287f7a25830fc0e3992df8b091c429fbbe`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-107484926-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stripe-checkout',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/interviews`,
        name: `interviews`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/issues`,
        name: `issues`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HUMAN CONDITION',
        short_name: 'HC',
        start_url: '/',
        background_color: '#f8f6ed',
        theme_color: '#f8f6ed',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
