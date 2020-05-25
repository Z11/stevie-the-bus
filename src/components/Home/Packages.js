import React from "react"
import Title from "../Title"
import styles from "../../css/packages.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getPackages = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        packages_main_title
        packages_main_title
        package_1_image
        package_1_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        package_1_text
        package_2_image
        package_2_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        package_2_text
        package_3_image
        package_3_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        package_3_text
      }
    }
  }
`

const Packages = () => {
  const {
    packages_main_title,
    package_1_imageSharp,
    package_1_text,
    package_2_imageSharp,
    package_2_text,
    package_3_imageSharp,
    package_3_text,
  } = useStaticQuery(getPackages).prismic.home_page

  return (
    <section className={styles.packages}>
      <Title title={packages_main_title[0].text} position="center" />
      <div className={styles.center}>
        <article key={1} className={styles.service}>
          <span>
            <Img
              fluid={package_1_imageSharp.childImageSharp.fluid}
              alt="srvImage1"
            />
          </span>
          <div className={styles.serviceBorderText}>
            <div className={styles.serviceText}>
              {package_1_text.map(element => {
                return <p>{element.text}</p>
              })}
            </div>
          </div>
        </article>
        <article key={2} className={styles.service}>
          <span>
            <Img
              fluid={package_2_imageSharp.childImageSharp.fluid}
              alt="srvImage2"
            />
          </span>
          <div className={styles.serviceBorderText}>
            <div className={styles.serviceText}>
              {package_2_text.map(element => {
                return <p>{element.text}</p>
              })}
            </div>
          </div>
        </article>
        <article key={3} className={styles.service}>
          <span>
            <Img
              fluid={package_3_imageSharp.childImageSharp.fluid}
              alt="srvImage3"
            />
          </span>
          <div className={styles.serviceBorderText}>
            <div className={styles.serviceText}>
              {package_3_text.map(element => {
                return <p>{element.text}</p>
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Packages
