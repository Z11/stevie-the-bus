import React from "react"
import styles from "./accordion.module.css"
import FaArrow from "../../../svgs/arrowIcon.svg"

const Accordion = ({ title, description, active, setActive }) => {
  console.log(FaArrow)
  return (
    <div className={styles.accordionCenter}>
      <div className={styles.accordionHeading}>
        <div className={styles.accordionContainer} aria-hidden="true" onClick={() => setActive(active === title ? "" : title)}>
          <p>{title}</p>
          <FaArrow className={(active === title ? `${styles.rotateDown}` : `${styles.rotateUp}`) + ` ${styles.rotate} ${styles.arrow}`} />
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
