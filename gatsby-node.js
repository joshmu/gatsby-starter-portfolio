const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const gatsbyNodeGraphQL = require("./src/gatsby/gatsbyNodeGraphQL")
const {
  createBlogPages,
  createProjectPages,
  createWorkPages,
} = require("./src/gatsby/createPages")

// ? single graphql query for multiple collections using aliases?
// https://github.com/LekoArts/portfolio/blob/master/gatsby-node.js
// https://github.com/LekoArts/portfolio/blob/master/src/gatsby/pageCreator.js
// https://github.com/LekoArts/portfolio/blob/master/src/gatsby/gatsbyNodeGraphQL.js

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPost = path.resolve(`./src/templates/project-post.js`)
  const workPost = path.resolve(`./src/templates/work-post.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(`{${gatsbyNodeGraphQL}}`)
  if (result.errors) {
    throw result.errors
  }

  console.log(JSON.stringify(result, null, 4))

  // collections
  createBlogPages(result.data.blogMD.edges, createPage, blogPost)
  createProjectPages(result.data.projectMD.edges, createPage, projectPost)
  createBlogPages(result.data.workMD.edges, createPage, workPost)
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

// deleting pages and recreating to provide context for graphql queries
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // console.log({ page })

  if (page.internalComponentName === "ComponentAbout") {
    deletePage(page)
    // You can access the variable "house" in your page queries now
    createPage({
      ...page,
      context: {
        ...page.context,
        slug: `/pages/about/`,
      },
    })
  }
}
