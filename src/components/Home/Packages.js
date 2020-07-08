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
        package_1_image
        package_1_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        package_1_title
        package_1_text
        package_2_image
        package_2_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        package_2_title
        package_2_text
        package_3_image
        package_3_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        package_3_title
        package_3_text
        options_text
      }
    }
  }
`

const Packages = () => {
  const {
    packages_main_title,
    package_1_imageSharp,
    package_1_title,
    package_1_text,
    package_2_imageSharp,
    package_2_title,
    package_2_text,
    package_3_imageSharp,
    package_3_title,
    package_3_text,
    options_text,
  } = useStaticQuery(getPackages).prismic.home_page

  return (
    <section className={styles.packages} id="packagesStevie">
      <Title title={packages_main_title[0].text} position="center" />
      <div className={styles.packagesCenter}>
        <article key={1}>
          <Img
            fluid={package_1_imageSharp.childImageSharp.fluid}
            alt="srvImage1"
          />
          <div className={styles.packageTitle}>
            <p>{package_1_title[0].text}</p>
          </div>
          <div className={styles.packageDescription}>
            {package_1_text.map((element, index) => {
              return <p key={index}>{element.text}</p>
            })}
          </div>
        </article>
        <article key={2}>
          <Img
            fluid={package_2_imageSharp.childImageSharp.fluid}
            alt="srvImage2"
          />
          <div className={styles.packageTitle}>
            <p>{package_2_title[0].text}</p>
          </div>
          <div className={styles.packageDescription}>
            {package_2_text.map((element, index) => {
              return <p key={index}>{element.text}</p>
            })}
          </div>
        </article>
        <article key={3}>
          <Img
            fluid={package_3_imageSharp.childImageSharp.fluid}
            alt="srvImage3"
          />
          <div className={styles.packageTitle}>
            <p>{package_3_title[0].text}</p>
          </div>
          <div className={styles.packageDescription}>
            {package_3_text.map((element, index) => {
              return <p key={index}>{element.text}</p>
            })}
          </div>
        </article>
      </div>
      <div className={styles.packageOptionsDescription}>
        <p>{options_text[0].text}</p>
      </div>
    </section>
  )
}

export default Packages
