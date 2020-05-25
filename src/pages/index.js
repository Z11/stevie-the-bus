import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Packages from "../components/Home/Packages"
import EveryPackageDetail from "../components/Home/EveryPackageDetail"
import Rent from "../components/Home/Rent"
import ContactEnd from "../components/Home/ContactEnd"
import SEO from "../components/seo"

export default props => (
  <>
    <Layout>
      <SEO title="Home" />
      <StyledHero
        home="true"
        img={
          props.data.prismic.home_page.background_home_imageSharp
            .childImageSharp.fluid
        }
      ></StyledHero>
      <About />
      <Services />
      <Packages />
      <EveryPackageDetail />
      <Rent />
      <StyledHero
        img={
          props.data.prismic.home_page.contact_end_imageSharp.childImageSharp
            .fluid
        }
      ></StyledHero>
      <ContactEnd />
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
            fluid(quality: 100, maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        contact_end_image
        contact_end_imageSharp {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
