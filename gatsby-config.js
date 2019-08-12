module.exports = {
  siteMetadata: {
    title: `Ayoloka`,
    description: `Ayoloka - Jagonya Bikin Event`,
    author: `@ayoloka.com`,    
    blog: `https://blog.ayoloka.com`,
    docs: `https://docs.ayoloka.com`,
    github: `https://github.com/Maxxoto/ayoloka.com`

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ayoloka`,
        short_name: `Ayoloka`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/ayoloka_white.jpeg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    },
    `gatsby-plugin-offline`,
    {
      options = {
        importWorkboxFrom: `local`,
        globDirectory: rootDir,
        globPatterns,
        modifyUrlPrefix: {
          // If `pathPrefix` is configured by user, we should replace
          // the default prefix with `pathPrefix`.
          "/": `${pathPrefix}/`,
        },
        cacheId: `gatsby-plugin-offline`,
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      }

    },
  ]
};
