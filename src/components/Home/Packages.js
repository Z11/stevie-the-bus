import React from "react"
import Title from "../Title"
import styles from "../../css/packages.module.css"
import packages from "../../constants/packages"

const Packages = () => {
  return (
    <section className={styles.packages} id="packagesStevie">
      <Title title="Our Packages" position="center" />
      <div className={styles.center}>
        {packages.map((item, index) => {
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
