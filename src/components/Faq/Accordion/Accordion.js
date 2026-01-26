import React from "react"
import styles from "./accordion.module.css"
import FaArrow from "../../../svgs/arrowIcon.svg"

const Accordion = ({ title, description, active, setActive }) => {
  return (
    <div className={styles['accordion-center']}>
      <div className={styles['accordion-heading']}>
        <div className={styles['accordion-container']} aria-hidden="true" onClick={() => setActive(active === title ? "" : title)}>
          <p>{title}</p>
          <FaArrow className={(active === title ? `${styles['rotate-down']}` : `${styles['rotate-up']}`) + ` ${styles.rotate} ${styles.arrow}`} />
        </div>
      </div>

      <div
        className={
          (active === title ? `${styles['accordion-content-show']}` : "") +
          ` ${styles['accordion-content']}`
        }
      >
        <div className={styles['accordion-container']}>
          <p>{description}</p>
        </div>
      </div>
      <hr className={styles.border} />
    </div>
  )
}

export default Accordion
