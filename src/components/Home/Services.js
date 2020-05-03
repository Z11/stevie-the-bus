import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import { FaHeart, FaBusinessTime } from "react-icons/fa"
import { GiGlassCelebration } from "react-icons/gi"
import { useStaticQuery, graphql } from "gatsby"

const getServices = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        services_main_title
        service_1_title
        service_1_text
        service_2_title
        service_2_text
        service_3_title
        service_3_text
      }
    }
  }
`

const Services = () => {
  const {
    services_main_title,
    service_1_title,
    service_1_text,
    service_2_title,
    service_2_text,
    service_3_title,
    service_3_text,
  } = useStaticQuery(getServices).prismic.home_page

  return (
    <section className={styles.services} id="servicesStevie">
      <Title title={services_main_title[0].text} position="center" />
      <div className={styles.center}>
        <article key={1} className={styles.service}>
          <span>
            <FaHeart />
          </span>
          <h4>{service_1_title[0].text}</h4>
          <p>{service_1_text[0].text}</p>
        </article>
        <article key={2} className={styles.service}>
          <span>
            <GiGlassCelebration />
          </span>
          <h4>{service_2_title[0].text}</h4>
          <p>{service_2_text[0].text}</p>
        </article>
        <article key={3} className={styles.service}>
          <span>
            <FaBusinessTime />
          </span>
          <h4>{service_3_title[0].text}</h4>
          <p>{service_3_text[0].text}</p>
        </article>
      </div>
    </section>
  )
}

export default Services
