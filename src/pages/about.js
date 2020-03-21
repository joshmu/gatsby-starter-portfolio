import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactPlayer from 'react-player'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { title, videoSourceURL, videoTitle } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const featuredImgFluid =
    data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Page" />
      <Bio />
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <h2>{title}</h2>

      <Img fluid={featuredImgFluid} alt="hero shot for about page" />

      {/* <img src={photoSrc} alt="representing myself" /> */}
      <section dangerouslySetInnerHTML={{ __html: html }} />

      <h3>{videoTitle}</h3>
      <ReactPlayer url={videoSourceURL} />

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
      html
      frontmatter {
        title
        videoSourceURL
        videoTitle
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
