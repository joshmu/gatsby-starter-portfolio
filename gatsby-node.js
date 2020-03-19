const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

// ? single graphql query for multiple collections using aliases?
// https://github.com/LekoArts/portfolio/blob/master/gatsby-node.js
// https://github.com/LekoArts/portfolio/blob/master/src/gatsby/gatsbyNodeGraphQL.js
const gatsbyNodeGraphQL = `
  blog: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        timeToRead
        parent {
          ... on File {
            relativeDirectory
          }
        }
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
  projects: allPrismicProjekt(sort: { fields: [data___date], order: DESC }) {
    edges {
      node {
        fields {
          slug
        }
        lang
        data {
          title {
            text
          }
          cover {
            localFile {
              childImageSharp {
                resize(width: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const workPost = path.resolve(`./src/templates/work-post.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              timeToRead
              parent {
                ... on File {
                  relativeDirectory
                }
              }
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create pages.
  const pages = result.data.allMarkdownRemark.edges

  pages.forEach((post, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    const folder = post.node.parent.relativeDirectory.split("/")[0]
    console.log(folder)

    if (folder === "works") {
      createPage({
        path: post.node.fields.slug,
        component: workPost,
        context: {
          slug: post.node.fields.slug,
          category: folder,
          previous,
          next,
        },
      })
    } else if (folder === "blog") {
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          category: folder,
          timeToRead: post.node.timeToRead,
          previous,
          next,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
