import React from "react"
import Title from "../Title"
import styles from "../../css/packages.module.css"
import services from "../../constants/services"

const Packages = () => {
  return (
    <section className={styles.packages}>
      <Title title="Our Services" position="center" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.package}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Packages
