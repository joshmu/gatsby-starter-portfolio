import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import ContactForm from "../components/contactForm"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  const { html } = post
  const { title, featuredImage } = post.frontmatter
  const featuredImageFluid =
    featuredImage === null ? null : featuredImage.childImageSharp.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Page" />
      <Bio />
      <h2>{title ? title : "Contact"}</h2>

      {featuredImageFluid && (
        <Img fluid={featuredImageFluid} alt="hero shot for contact page" />
      )}

      {html && <section dangerouslySetInnerHTML={{ __html: html }} />}

      <ContactForm />

      <h3>
        <Link style={{ boxShadow: `none` }} to="/">
          Back Home
        </Link>
      </h3>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
