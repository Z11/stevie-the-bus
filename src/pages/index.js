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
        img={
          props.data.prismic.home_page.background_home_imageSharp
            .childImageSharp.fluid
        }
      ></StyledHero>
      <About />
      <Services />
      <Packages />
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
            fluid(quality: 100, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     defaultBcg: file(relativePath: { eq: "stevie-the-bus-homepage-hero.jpg" }) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 1200) {
//           ...GatsbyImageSharpFluid_withWebp_tracedSVG
//         }
//       }
//     }
//   }
// `

// about_title
// about_text
// about_image
// services_main_title
// service_1_title
// service_1_text
// service_2_title
// service_2_text
// service_3_title
// service_3_text
// packages_main_title
// package_1_image
// package_1_text
// package_2_image
// package_2_text
// package_3_image
// package_3_text
