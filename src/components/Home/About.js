import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// this is causing lazy load warnigs:
// [Intervention] An <img> element was lazyloaded with loading=lazy,
// but had no dimensions specified. Specifying dimensions improves performance.
// See https://crbug.com/954323
// git hub issue: https://github.com/gatsbyjs/gatsby/issues/17506

const getAbout = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        about_title
        about_text
        about_image
        about_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const About = () => {
  const { about_imageSharp, about_text, about_title } = useStaticQuery(
    getAbout
  ).prismic.home_page

  return (
    <section className={styles.about} id="aboutStevie">
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <Title title={about_title[0].text} position="left"></Title>
          <hr className={styles.border} />
          {about_text.map((item, index) => <p key={index}>{item.text}</p>)}
        </article>
        <article>
          <div>
            <Img
              fluid={about_imageSharp.childImageSharp.fluid}
              alt="Meet Stevie Photo"
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
