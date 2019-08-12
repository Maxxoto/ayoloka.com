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
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
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
    }
  ]
};
