import React from "react"
import Title from "../Title"
import { Link } from "gatsby"
import styles from "../../css/rent.module.css"
import btnStyle from "../../css/awesomeButton.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// this is causing lazy load warnigs:
// [Intervention] An <img> element was lazyloaded with loading=lazy,
// but had no dimensions specified. Specifying dimensions improves performance.
// See https://crbug.com/954323
// git hub issue: https://github.com/gatsbyjs/gatsby/issues/17506

const getRent = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        rent_title
        rent_text
        rent_image
        rent_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
    <section className={styles.rent} id="rentStevie">
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
          <Title title={rent_title[0].text} position="left"></Title>
          <hr className={styles.border} />
          {rent_text.map((element, index) => {
            return <p key={index}>{element.text}</p>
          })}
          <div className={styles.buttonDecorator}>
            <Link to="/../gallery">
              <button className={btnStyle.learn}>Gallery</button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Rent
