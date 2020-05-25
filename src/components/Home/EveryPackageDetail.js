import React from "react"
import Title from "../Title"
import styles from "../../css/everyPackage.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getEveryPackageDetail = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        every_package_detail_title
        every_package_detail_text
        every_package_detail_image
        every_package_detail_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

const EveryPackageDetail = () => {
  const {
    every_package_detail_imageSharp,
    every_package_detail_text,
    every_package_detail_title,
  } = useStaticQuery(getEveryPackageDetail).prismic.home_page

  return (
    <div>
      <hr className={styles.border} />
      <section className={styles.everyPkg}>
        <Title
          title={every_package_detail_title[0].text}
          position="center"
        ></Title>
        <div className={styles.everyPkgCenter}>
          <article className={styles.everyPkgImg}>
            <div>
              <Img
                fluid={every_package_detail_imageSharp.childImageSharp.fluid}
                alt="Meet Stevie Photo"
              />
            </div>
          </article>
          <article className={styles.everyPkgInfo}>
            {every_package_detail_text.map(element => {
              return <p>{element.text}</p>
            })}
          </article>
        </div>
      </section>
    </div>
  )
}

export default EveryPackageDetail
