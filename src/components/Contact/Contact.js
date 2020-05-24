import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = props => {
  return (
    <section className={styles.contact}>
      <Title title={props.title.text} position="center" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/mgenaoww"
          method="POST"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
