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
                    name="First Name"
                    id="first name"
                    className={styles.formControl}
                    placeholder="first name"
                  />
                </article>
                <article>
                  <label htmlFor="last name">Last Name</label>
                  <input
                    type="text"
                    name="Last Name"
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
                name="Email Address"
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
                name="Phone Number"
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
                    name="Date of Event"
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
                type="text"
                name="Location of Event"
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
                name="I would like to know..."
                value="Service Quote"
              />
              <label htmlFor="serviceQuote"> Service Quote</label>
              <br />
              <input
                type="radio"
                id="dateAvailable"
                name="I would like to know..."
                value="Date Available"
              />
              <label htmlFor="DateAvailable"> If my date is available</label>
              <br />
              <input
                type="radio"
                id="rateAndAvailability"
                name="I would like to know..."
                value="Both rental rate and availability"
              />
              <label htmlFor="rateAndAvailability">
                {" "}
                Both rental rate and availability
              </label>
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="vehicle">I'm interested in booking...</label>
              <br />
              <input
                type="radio"
                id="stevieProp"
                name="I'm interested in booking..."
                value="Stevie (‘77 VW Bus) Prop"
              />
              <label htmlFor="stevieProp"> Stevie (‘77 VW Bus) Prop</label>
              <br />
              <input
                type="radio"
                id="lindseyProp"
                name="I'm interested in booking..."
                value="Lindsey (‘66 VW Beetle) Prop"
              />
              <label htmlFor="lindseyProp"> Lindsey (‘66 VW Beetle) Prop</label>
              <br />
              <input
                type="radio"
                id="steviePhotoBus"
                name="I'm interested in booking..."
                value="Stevie Photo Booth Bus"
              />
              <label htmlFor="steviePhotoBus"> Stevie Photo Booth Bus</label>
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
                name="I am interested in booking for..."
                value="Photo Video Shoot"
              />
              <label htmlFor="photoVideoShoot">
                {" "}
                Photo / Video Shoot (Vehicle Prop Only)
              </label>
              <br />
              <input
                type="radio"
                id="photoShoot"
                name="I am interested in booking for..."
                value="Photo Shoot"
              />
              <label htmlFor="photoShoot">
                {" "}
                Photo Shoot (Vehicle + Photographer)
              </label>
              <br />
              <input
                type="radio"
                id="miniSessions"
                name="I am interested in booking for..."
                value="Mini Sessions"
              />
              <label htmlFor="miniSessions"> Mini Sessions</label>
              <br />
              <input
                type="radio"
                id="privateParty"
                name="I am interested in booking for..."
                value="Private Party"
              />
              <label htmlFor="privateParty"> Private Party</label>
              <br />
              <input
                type="radio"
                id="wedding"
                name="I am interested in booking for..."
                value="Wedding"
              />
              <label htmlFor="wedding"> Wedding</label>
              <br />
              <input
                type="radio"
                id="other"
                name="I am interested in booking for..."
                value="other"
              />
              <label htmlFor="other"> Other</label>
              <br />
              <br />
            </div>
            <div>
              <label htmlFor="message">Tell us about your event:</label>
              <textarea
                name="Tell us about your event:"
                id="message"
                rows="3"
                className={styles.formControl}
                required
              />
            </div>
            <div>
              <label htmlFor="hourCount">
                How many hours do you need for the rental?
              </label>
              <section className={styles.contactName}>
                <article>
                  <input
                    type="number"
                    min="1"
                    name="How many hours do you need for the rental?"
                    id="hourCount"
                    className={styles.formControl}
                  />
                </article>
              </section>
            </div>
            <div>
              <label htmlFor="guestCount">
                Estimated guest count for photo booth bus
              </label>
              <section className={styles.contactName}>
                <article>
                  <input
                    type="number"
                    min="0"
                    name="Estimated guest count for photo booth bus"
                    id="guestCount"
                    className={styles.formControl}
                  />
                </article>
              </section>
            </div>
            <div>
              <label htmlFor="source">How did you find us?</label>
              <br />
              <input
                type="radio"
                id="google"
                name="How did you find us?"
                value="google"
              />
              <label htmlFor="google"> Google</label>
              <br />
              <input
                type="radio"
                id="Instagram"
                name="How did you find us?"
                value="Instagram"
              />
              <label htmlFor="Instagram"> Instagram</label>
              <br />
              <input
                type="radio"
                id="Facebook"
                name="How did you find us?"
                value="Facebook"
              />
              <label htmlFor="Facebook"> Facebook</label>
              <br />
              <input
                type="radio"
                id="Bridal Show"
                name="How did you find us?"
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
