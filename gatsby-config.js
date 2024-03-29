module.exports = {
  siteMetadata: {
    title: `Ayoloka`,
    siteUrl: `https://www.ayoloka.com`,
    description: `Buat event lebih mudah di Ayoloka , ayo cari atau buat workshop , jadwalkan , beli dan jual tiketmu sekarang di Ayoloka.com. `,
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
        icon: `src/images/favicon.png`
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.ayoloka.com',
        sitemap: 'https://www.ayoloka.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ]
};
