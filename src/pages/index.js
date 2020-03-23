import React from "react"
import { graphql } from "gatsby"

import { Grid } from "@horacioh/gatsby-theme-instagram"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

import styled from "styled-components"

const StyledWrapperInstagram = styled.div`
  a {
    box-shadow: none;
  }
`

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <Bio />
      <h1>Home</h1>
      <StyledWrapperInstagram>
        <Grid />
      </StyledWrapperInstagram>
      <br />
      <ContactForm />
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
