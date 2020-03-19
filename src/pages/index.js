import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <Bio />
      <h1>Home</h1>
      <h3>
        <Link style={{ boxShadow: `none` }} to="/about">
          About
        </Link>
      </h3>
      <h3>
        <Link style={{ boxShadow: `none` }} to="/projects">
          Projects
        </Link>
      </h3>
      <h3>
        <Link style={{ boxShadow: `none` }} to="/works">
          Works
        </Link>
      </h3>
      <h3>
        <Link style={{ boxShadow: `none` }} to="/blog">
          Blog
        </Link>
      </h3>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
