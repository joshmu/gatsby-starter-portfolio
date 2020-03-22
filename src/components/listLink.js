import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const StyledLi = styled.li`
  text-transform: capitalize;
`

const ListLink = ({ to, title }) => {
  return (
    <StyledLi>
      <Link style={{ boxShadow: `none` }} to={`/${to}`}>
        {title ? title : to}
      </Link>
    </StyledLi>
  )
}

export default ListLink
