import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import LinkLink from "./listLink"

import styled from "styled-components"
import { $dark } from "../styles/variables"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledNav = styled.div`
  ul {
    display: flex;
    align-content: center;
    justify-content: space-around;

    li {
      margin: 0 ${rhythm(0.25)};
      a {
        color: ${$dark};
      }
    }
  }
`

const Header = ({ location, title }) => {
  return (
    <StyledHeader>
      <div>
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
      </div>

      <StyledNav>
        <ul>
          <LinkLink to="about" />
          <LinkLink to="projects" />
          <LinkLink to="works" />
          <LinkLink to="blog" title="news" />
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
