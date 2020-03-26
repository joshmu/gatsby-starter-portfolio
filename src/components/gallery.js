import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PhotoGallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

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
                src
                srcSet
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  `)
  const photos = data.allFile.edges.map(edge => {
    const {
      src,
      srcSet,
      originalName: caption,
      presentationWidth: width,
      presentationHeight: height,
    } = edge.node.childImageSharp.fluid
    return {
      src,
      srcSet,
      caption,
      width,
      height,
    }
  })

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <PhotoGallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.caption.split(".")[0],
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Gallery
