import React from "react"
import Title from "../Title"
import styles from "../../css/rent.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getRent = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        rent_title
        rent_text
        rent_image
        rent_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Rent = () => {
  const { rent_imageSharp, rent_text, rent_title } = useStaticQuery(
    getRent
  ).prismic.home_page

  return (
    <div>
      <hr className={styles.border} />
      <section className={styles.rent} id="aboutStevie">
        <Title title={rent_title[0].text} position="center"></Title>
        <div className={styles.rentCenter}>
          <article className={styles.rentImg}>
            <div>
              <Img
                fluid={rent_imageSharp.childImageSharp.fluid}
                alt="Meet Stevie Photo"
              />
            </div>
          </article>
          <article className={styles.rentInfo}>
            {rent_text.map(element => {
              return <p>{element.text}</p>
            })}
          </article>
        </div>
      </section>
    </div>
  )
}

export default Rent
