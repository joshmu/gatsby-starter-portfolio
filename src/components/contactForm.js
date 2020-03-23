import React, { useState } from "react"
import { rhythm } from "../utils/typography"

import styled from "styled-components"
import { dark, light } from "../styles/variables"
const StyledFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${rhythm(1)};

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  label {
    letter-spacing: 1px;
    font-family: "Playfair Display", serif;
  }
  input,
  textarea {
    margin: ${rhythm(0.25)} 0;
    padding: ${rhythm(0.25)};
    min-width: ${rhythm(16)};
    border: 1px solid ${dark};
    border-radius: 2px;
  }
  [type="submit"] {
    padding: ${rhythm(0.25)} ${rhythm(1.5)};
    margin-top: ${rhythm(0.5)};
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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(() => {
        alert("Success!")
        setSuccess(true)
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    // <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>Your Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={message}
          rows="4"
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <h4>{success && "Message Sent."}</h4>
    </StyledFormWrapper>
  )
}

export default ContactForm
