import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  // filter: {
  //   extension: { regex: "/(jpg)|(png)|(jpeg)/" }
  //   relativeDirectory: { eq: "/projects" }
  // }
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allFile.edges.map((image, idx) => (
        <Img
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
          key={idx}
        />
      ))}
    </div>
  )
}

export default Gallery
