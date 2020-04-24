import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { Profiler } from "react"

export default props => (
  <>
    <Profiler id={props.someUniqueId}>
      <Layout>
        <StyledHero
          home="true"
          img={props.data.defaultBcg.childImageSharp.fluid}
        ></StyledHero>
        <About />
        <Services />
      </Layout>
    </Profiler>
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
