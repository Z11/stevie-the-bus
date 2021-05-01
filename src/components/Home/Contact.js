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
            <br />
            <div>
              <label htmlFor="details">I would like to know...</label>
              <br />
              <input
                type="radio"
                id="serviceQuote"
                name="details"
                value="serviceQuote"
              />
              <label htmlFor="serviceQuote"> Service Quote</label>
              <br />
              <input
                type="radio"
                id="dateAvailable"
                name="details"
                value="dateAvailable"
              />
              <label htmlFor="dateAvailable"> If my date is available</label>
              <br />
              <input
                type="radio"
                id="rateAndAvailability"
                name="details"
                value="rateAndAvailability"
              />
              <label htmlFor="rateAndAvailability">
                {" "}
                Both rental rate and availability
              </label>
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="vehicle"> I'm interested in booking...</label>
              <br />
              <input type="radio" id="stevie" name="vehicle" value="stevie" />
              <label htmlFor="stevie"> Stevie (‘77 VW Bus)</label>
              <br />
              <input type="radio" id="lindsey" name="vehicle" value="lindsey" />
              <label htmlFor="lindsey"> Lindsey (‘66 VW Beetle)</label>
              <br />
              <br />
            </div> 
            <div>
              <label htmlFor="services">
                I am interested in booking for...
              </label>
              <br />
              <input
                type="radio"
                id="photoVideoShoot"
                name="services"
                value="photoVideoShoot"
              />
              <label htmlFor="photoVideoShoot">
                {" "}
                Photo / Video Shoot (Vehicle Prop Only)
              </label>
              <br />
              <input
                type="radio"
                id="photoShoot"
                name="services"
                value="photoShoot"
              />
              <label htmlFor="photoShoot">
                {" "}
                Photo Shoot (Vehicle + Photographer)
              </label>
              <br />
              <input
                type="radio"
                id="miniSessions"
                name="services"
                value="miniSessions"
              />
              <label htmlFor="miniSessions"> Mini Sessions</label>
              <br />
              <input
                type="radio"
                id="privateParty"
                name="services"
                value="privateParty"
              />
              <label htmlFor="privateParty"> Private Party</label>
              <br />
              <input
                type="radio"
                id="photoBoothBus"
                name="services"
                value="photoBoothBus"
              />
              <label htmlFor="photoBoothBus"> Photo Booth Bus</label>
              <br />
              <input
                type="radio"
                id="wedding"
                name="services"
                value="wedding"
              />
              <label htmlFor="wedding"> Wedding</label>
              <br />
              <input type="radio" id="other" name="services" value="other" />
              <label htmlFor="other"> Other</label>
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="message">Tell us about your event</label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className={styles.formControl}
                required
              />
            </div>
            <div>
            <label htmlFor="guestCount">Estimated guest count for photo booth bus</label>
            <section className={styles.contactName}>
                <article>
                  <input
                    type="number"
                    name="guestCount"
                    id="guestCount"
                    className={styles.formControl}
                  />
                </article>
              </section>
            </div>
            <div>
              <label htmlFor="source"> How did you find us?</label>
              <br />
              <input type="radio" id="google" name="source" value="google" />
              <label htmlFor="google"> Google</label>
              <br />
              <input
                type="radio"
                id="Instagram"
                name="source"
                value="Instagram"
              />
              <label htmlFor="Instagram"> Instagram</label>
              <br />
              <input
                type="radio"
                id="Facebook"
                name="source"
                value="Facebook"
              />
              <label htmlFor="Facebook"> Facebook</label>
              <br />
              <input
                type="radio"
                id="Bridal Show"
                name="source"
                value="Bridal Show"
              />
              <label htmlFor="Bridal Show"> Bridal Show</label>
              <br />
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
