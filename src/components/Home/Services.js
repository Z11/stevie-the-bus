import React from "react"
import styles from "../../css/services.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getServices = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        service_1_title
        service_1_text
        service_1_image
        service_1_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500, maxHeight: 370) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        service_2_title
        service_2_text
        service_2_image
        service_2_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500, maxHeight: 370) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const Services = () => {
  const {
    service_1_title,
    service_1_text,
    service_1_imageSharp,
    service_2_title,
    service_2_text,
    service_2_imageSharp,
  } = useStaticQuery(getServices).prismic.home_page

  return (
    <section className={styles.services}>
      <div className={styles.serviceCenter}>
        <article key={1}>
          <Img
            fluid={service_1_imageSharp.childImageSharp.fluid}
            alt="desktop bus logo"
          />
          <div className={styles.serviceTitle}>
            {service_1_title.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
          <div className={styles.serviceDescription}>
            {service_1_text.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
        </article>
        <article key={2}>
          <Img
            fluid={service_2_imageSharp.childImageSharp.fluid}
            alt="desktop bus logo"
          />
          <div className={styles.serviceTitle}>
            {service_2_title.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
          <div className={styles.serviceDescription}>
            {service_2_text.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
