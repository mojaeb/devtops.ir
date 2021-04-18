module.exports = {
  siteMetadata: {
    title: "devtops",
    titleTemplate: "%s · برترین مطالب برای برترین ها",
    description: "برترین مطالب برنامه نویسی برای برترین ها",
    url: "https://www.devtops.ir",
    image: "/data/images/devtops.png",
  },
  plugins: [
    // "gatsby-plugin-sass",
    'gatsby-plugin-postcss',
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-yaml`,
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "data/images/icon.png",
        name: `Devtops`,
        short_name: `Devtops`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0A0EFF`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              // maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./data/images",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./data/",
      },
      __key: "data",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
    "MarkdownRemark.frontmatter.category": `CategoryYaml`,
  },
};

