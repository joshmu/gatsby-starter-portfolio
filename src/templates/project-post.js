import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactPlayer from "react-player"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import styled from "styled-components"
const StyledContainerReactPlayer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  margin: ${rhythm(1.5)} 0;
`

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  const { html } = post
  const {
    title,
    featuredImage,
    videoSourceURL,
    videoTitle,
    videoPassword,
    galleryImages,
    reviews,
  } = post.frontmatter
  const featuredImgFluid = featuredImage.childImageSharp.fluid
  const { previous, next } = pageContext

  // galleryImages {
  //           childImageSharp {
  //             fluid {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //         reviews {
  //           critic
  //           review
  //           sourceURL
  //         }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>

        <Img fluid={featuredImgFluid} alt="hero shot for about page" />

        {/* <img src={photoSrc} alt="representing myself" /> */}
        <section dangerouslySetInnerHTML={{ __html: html }} />

        {galleryImages && (
          <div>
            {galleryImages.map(img => (
              <Img fluid={img.childImageSharp.fluid} />
            ))}
          </div>
        )}

        <h3>{videoTitle}</h3>
        <StyledContainerReactPlayer>
          <ReactPlayer url={videoSourceURL} />
        </StyledContainerReactPlayer>
        {videoPassword && <em>Password: {videoPassword}</em>}

        {reviews && (
          <ul>
            {reviews.map(review => (
              <li>
                <a href={review.sourceURL}>
                  {review.review} - {review.critic}
                </a>
              </li>
            ))}
          </ul>
        )}

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        description
        videoSourceURL
        videoTitle
        videoPassword
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        galleryImages {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reviews {
          critic
          review
          sourceURL
        }
      }
    }
  }
`
