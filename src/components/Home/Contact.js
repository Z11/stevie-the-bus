import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <div id="contactStevie">
      <hr className={styles.border} />
      <section className={styles.contact}>
        <Title title={"Get In Touch!"} position="center" />
        <div className={styles.center}>
          <form
            className={styles.form}
            action="https://formspree.io/myynnlkz"
            method="POST"
          >
            <div>
              <section className={styles.contactName}>
                <article>
                  <label htmlFor="first name">First Name</label>
                  <input
                    type="text"
                    name="first name"
                    id="first name"
                    className={styles.formControl}
                    placeholder="first name"
                  />
                </article>
                <article>
                  <label htmlFor="last name">Last Name</label>
                  <input
                    type="text"
                    name="last name"
                    id="last name"
                    className={styles.formControl}
                    placeholder="last name"
                  />
                </article>
              </section>
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                className={styles.formControl}
                placeholder="email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className={styles.formControl}
                placeholder="phone"
                required
              />
            </div>
            <div>
              <section className={styles.contactDate}>
                <article>
                  <label htmlFor="date">Date of Event </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className={styles.formControl}
                    placeholder="date"
                    required
                  />
                </article>
              </section>
            </div>
            <div>
              <label htmlFor="location">Location of Event</label>
              <input
                type="location"
                name="location"
                id="location"
                className={styles.formControl}
                placeholder="location"
                required
              />
            </div>
            <div>
              <label htmlFor="package">
                Which package are you interested in ?
              </label>
              <br />
              <input type="radio" id="dreams" name="package" value="dreams" />
              <label htmlFor="dreams"> Dreams</label>
              <br />
              <input
                type="radio"
                id="everywhere"
                name="package"
                value="everywhere"
              />
              <label htmlFor="everywhere"> Everywhere</label>
              <br />
              <input
                type="radio"
                id="dontStop"
                name="package"
                value="dontStop"
              />
              <label htmlFor="dontStop"> Don't Stop</label>
              <br />
              <input
                type="radio"
                id="photoVideoShoot"
                name="package"
                value="photoVideoShoot"
              />
              <label htmlFor="photoVideoShoot"> Photo / Video Shoot</label>
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="message">Event or Photo Shoot Description</label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className={styles.formControl}
                placeholder="hello there"
              />
            </div>
            <div>
            <br />
              <input
                type="submit"
                value="submit here"
                className={styles.submit}
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
