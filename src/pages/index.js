import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Packages from "../components/Home/Packages"

export default props => (
  <>
    <Layout>
      <StyledHero
        home="true"
        img={props.data.defaultBcg.childImageSharp.fluid}
      ></StyledHero>
      <About />
      <Services />
      <Packages />
    </Layout>
  </>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "stevie-the-bus-homepage-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
