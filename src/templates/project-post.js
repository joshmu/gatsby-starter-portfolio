import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactPlayer from "react-player"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GalleryGrid from "../components/galleryGrid"
import { rhythm, scale } from "../utils/typography"

import styled from "styled-components"

const StyledWrapperReactPlayer = styled.div`
  margin-top: ${rhythm(1)};
  h3 {
    margin: 0;
    padding: 0;
  }
  sm {
    ${scale(-0.25)}
  }
`

const StyledContainerReactPlayer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  margin: ${rhythm(0.5)} 0;
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
  const featuredImageFluid =
    featuredImage === null ? null : featuredImage.childImageSharp.fluid
  const { previous, next } = pageContext

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

        {featuredImageFluid && (
          <Img fluid={featuredImageFluid} alt="hero shot for about page" />
        )}

        {/* <img src={photoSrc} alt="representing myself" /> */}
        <section dangerouslySetInnerHTML={{ __html: html }} />

        {galleryImages && <GalleryGrid items={galleryImages} />}

        {videoSourceURL && (
          <StyledWrapperReactPlayer>
            {videoTitle && <h3>{videoTitle}</h3>}
            {videoPassword && (
              <sm>
                Password: <em>{videoPassword}</em>
              </sm>
            )}

            <StyledContainerReactPlayer>
              <ReactPlayer url={videoSourceURL} />
            </StyledContainerReactPlayer>
          </StyledWrapperReactPlayer>
        )}

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        {reviews && (
          <div>
            <h3>Critic Reviews</h3>
            <ul>
              {reviews.map((review, idx) => (
                <li key={idx}>
                  {review.review} -{" "}
                  <a href={review.sourceURL}>{review.critic}</a>
                </li>
              ))}
            </ul>
          </div>
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
            id
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
