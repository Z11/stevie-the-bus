import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export const query = graphql`
  query {
    prismic {
      contactus(uid: "contact_us_slug", lang: "en-us") {
        contact_us_title
        contact_us_image
        contact_us_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero
        img={data.prismic.contactus.contact_us_imageSharp.childImageSharp.fluid}
      />
      <Contact title={data.prismic.contactus.contact_us_title[0]} />
    </Layout>
  )
}
