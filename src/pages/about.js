import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { title, body } = data.markdownRemark.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Page" />
      <Bio />
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>
        <Link style={{ boxShadow: `none` }} to="/">
          Back Home
        </Link>
      </h3>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
