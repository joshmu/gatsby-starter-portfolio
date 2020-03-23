import React from "react"

const ContactForm = () => {
  return (
    // <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message"></textarea>
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="submit" />
    </form>
  )
}

export default ContactForm
