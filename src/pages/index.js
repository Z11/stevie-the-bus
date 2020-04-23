import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default ({ data }) => (
  <>
    <Layout>
      <StyledHero
        home="true"
        img={data.defaultBcg.childImageSharp.fluid}
      ></StyledHero>
      <About />
      <Services />
    </Layout>
  </>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "stevie-the-bus-homepage-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
