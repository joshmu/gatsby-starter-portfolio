import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  width: 100%;
  /* background-color: papayawhip; */
`

const StyledGridItem = styled.div`
  flex: 1 ${rhythm(8)};
  padding: ${rhythm(0.1)};
  /* background-color: honeydew; */
`

const GalleryGrid = ({ items }) => {
  return (
    <StyledGrid>
      {items.map(galleryImage => (
        <StyledGridItem>
          <Img
            fluid={galleryImage.childImageSharp.fluid}
            key={galleryImage.childImageSharp.id}
          />
        </StyledGridItem>
      ))}
    </StyledGrid>
  )
}

export default GalleryGrid
