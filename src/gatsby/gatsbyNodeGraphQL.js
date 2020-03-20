const gatsbyNodeGraphQL = `
  blogMD: allMarkdownRemark(filter: {fields: {slug: {regex: "/^\\/blog/"}}}, sort: {fields: frontmatter___date, order: ASC}) {
    edges {
      node {
        frontmatter {
          title
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
        fields {
          slug
        }
        timeToRead
      }
    }
  }
  projectMD: allMarkdownRemark(filter: {fields: {slug: {regex: "/^\\/project/"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
        fields {
          slug
        }
      }
    }
  }
  workMD: allMarkdownRemark(filter: {fields: {slug: {regex: "/^\\/work/"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
        fields {
          slug
        }
      }
    }
  }

`
module.exports = gatsbyNodeGraphQL

// everythingElseNotBlogAllMarkdownRemark:  allMarkdownRemark(filter: {fields: {slug: {regex: "/^((?!blog).)*$/"}}}) {
//     edges {
//       node {
//         timeToRead
//         parent {
//           ... on File {
//             relativeDirectory
//           }
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   }
