import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Packages from "../components/Home/Packages"
import Contact from "../components/Home/Contact"
import SEO from "../components/seo"
import { isIPad13 } from "react-device-detect"

export default props => (
  <>
    <Layout>
      <SEO title="Houston TX - Welcome to our VW Photo Booth" />
      <StyledHero
        home="true"
        isIPad13={isIPad13}
        img={
          props.data.prismic.home_page.background_home_imageSharp
            .childImageSharp.fluid
        }
      ></StyledHero>
      <About />
      <Services />
      <StyledHero
        isIPad13={isIPad13}
        img={
          props.data.prismic.home_page.contact_end_imageSharp.childImageSharp
            .fluid
        }
      ></StyledHero>
      <Packages />
      <Contact />
    </Layout>
  </>
)

export const query = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        background_home_image
        background_home_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        contact_end_image
        contact_end_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
