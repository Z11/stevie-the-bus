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
  query aboutImage {
    aboutImage: file(relativePath: { eq: "stevie-the-photo-bus-moon.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  console.log(styles)
  return (
    <section className={styles.about} id="aboutStevie">
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <Title title="Meet Stevie!" position="left"></Title>
          <hr className={styles.border} />
          <p>Cillum amet aute ad tempor do enim.</p>
          <p>Cillum amet aute ad tempor do enim.</p>
        </article>
        <article className={styles.aboutImg}>
          <div>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Meet Stevie Photo"
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
