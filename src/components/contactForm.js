import React from "react"
import { rhythm } from "../utils/typography"

import styled from "styled-components"
import { dark, light } from "../styles/variables"
const StyledFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      /* max-width: ${rhythm(16)}; */
      padding: ${rhythm(1)} 0;
      /* background-color: papayawhip; */
    }
    input,
    textarea {
      margin: ${rhythm(0.25)} 0;
      padding: ${rhythm(0.25)};
      min-width: ${rhythm(16)};
      letter-spacing: 1px;
      font-family: 'Playfair Display', serif;
      border: 1px solid ${dark};
      border-radius: 2px;
    }
    [type=submit] {
      cursor: pointer;
      text-transform: uppercase;
      color: ${light};
      background-color: ${dark};
      opacity: 0.9;
      transition: opacity 0.25s ease;
      &:hover {
        opacity: 1;
      }
    }
`

const ContactForm = () => {
  return (
    // <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <StyledFormWrapper>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows="4"></textarea>
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="submit" />
      </form>
    </StyledFormWrapper>
  )
}

export default ContactForm
