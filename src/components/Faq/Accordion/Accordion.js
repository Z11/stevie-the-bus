import React from "react"
import styles from "./accordion.module.css"

const Accordion = ({ title, description, active, setActive }) => {
  console.log(active, active === title)
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeading}>
        <div className={styles.accordionContainer} onClick={() => setActive(active === title ? "" : title)}>
          <p>{title}</p>
          <span >
            X
          </span>
        </div>
      </div>

      <div
        className={
          (active === title ? `${styles.accordionContentShow}` : "") +
          ` ${styles.accordionContent}`
        }
      >
        <div className={styles.accordionContainer}>
          <p>{description}</p>
        </div>
      </div>
      <hr className={styles.border} />
    </div>
  )
}

export default Accordion
