import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import LinkLink from "./listLink"

import styled from "styled-components"
import { dark, hoverTransition } from "../styles/variables"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogoTitle = styled.div`
  a {
    opacity: 1;
  }
`

const StyledNav = styled.nav`
  ul {
    display: flex;
    align-content: center;
    justify-content: space-around;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    li {
      margin: 0 ${rhythm(0.25)};
      a {
        color: ${dark};
        opacity: 0.7;
        transition: opacity ${hoverTransition} ease;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`

const Header = ({ location, title }) => {
  return (
    <StyledHeader>
      <StyledLogoTitle>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      </StyledLogoTitle>

      <StyledNav>
        <ul>
          <LinkLink to="about" />
          <LinkLink to="projects" />
          <LinkLink to="works" />
          <LinkLink to="blog" title="news" />
          <LinkLink to="contact" />
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
