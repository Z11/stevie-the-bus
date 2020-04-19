import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact></Contact>
    </Layout>
  )
}
