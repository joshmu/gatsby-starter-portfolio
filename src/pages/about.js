import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Page" />
      <Bio />
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla beatae
        dolore sint iure culpa ratione sunt enim ullam illum quisquam dolorum
        qui nesciunt, doloribus amet? Nostrum repudiandae blanditiis quas
        delectus.
      </p>
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
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
