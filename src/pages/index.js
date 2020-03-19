import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO: check netlifycms if 'about' and 'home' info work and how it is created
// todo: use graphql to find this data
// todo: inject in to pages
// todo: save as starter > then move to new repo for nelly's site design

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
          News
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
