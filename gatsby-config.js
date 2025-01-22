const fs = require('fs')
const path = require('path')
const remarkFootnotesPlugin = require('remark-numbered-footnote-labels')

let config = {
  siteUrl: 'https://www.example.com',
  title: 'Website Name',
  authorName: 'Author',
  description: 'Website description',
  keywords: 'Keyword 1, keyword 2, etc',
  aboutDescription: 'Description of the About page',
  archiveDescription: 'Description of the Archive page',
  copyRightYears: '2024',
  email: 'mailto:author@example.com',
  feedUrl: 'feed.xml',
}

if (fs.existsSync(path.resolve('./content/config.js'))) {
  config = require('./content/config.js')
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.title,
    author: {
      name: config.authorName,
    },
    description: config.description,
    keywords: config.keywords,
    aboutDescription: config.aboutDescription,
    archiveDescription: config.archiveDescription,
    footer: {
      copyRightYears: config.copyRightYears,
      email: config.email,
      feedPath: `/${config.feedUrl}`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'page',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images`,
        name: 'image',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'none',
              quality: 70,
              loading: 'auto',
              disableBgImage: true,
              maxWidth: 1035,
            },
          },
        ],
        remarkPlugins: [remarkFootnotesPlugin],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /\.(xml|txt)$/,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  url: config.siteUrl + edge.node.fields.pagePath,
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  filter: { fields: { type: { eq: "blog" } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      fields {
                        pagePath
                      }
                      frontmatter {
                        title
                        date
                      }
                      html
                    }
                  }
                }
              }
            `,
            title: config.title,
            author: config.author,
            output: config.feedUrl,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
