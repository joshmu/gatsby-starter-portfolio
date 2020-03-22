import React from "react"
import Header from "./header"

import { rhythm } from "../utils/typography"

import styled from "styled-components"

const StyledGlobalContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(28)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Layout = ({ location, title, children }) => {
  return (
    <StyledGlobalContainer>
      <Header location={location} title={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.joshmu.com">MU</a>
      </footer>
    </StyledGlobalContainer>
  )
}

export default Layout
