import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// this is causing laxzy load warnigs:
// [Intervention] An <img> element was lazyloaded with loading=lazy,
// but had no dimensions specified. Specifying dimensions improves performance.
// See https://crbug.com/954323

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "stevie-the-photo-bus-moon.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <Title title="about" subtitle="stevie"></Title>
          <p>Cillum amet aute ad tempor do enim.</p>
          <p>Cillum amet aute ad tempor do enim.</p>
        </article>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
