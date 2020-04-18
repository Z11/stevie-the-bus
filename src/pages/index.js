import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import About from "../components/Home/About"

export default ({ data }) => (
  <>
    <Layout>
      <StyledHero
        home="true"
        img={data.defaultBcg.childImageSharp.fluid}
      ></StyledHero>
      <About />
    </Layout>
  </>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "hero-background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
