import React from "react"
import { FaHeart, FaBusinessTime } from "react-icons/fa"
import { GiGlassCelebration } from "react-icons/gi"
import { graphql } from "gatsby"

export default [
  {
    icon: <FaHeart />,
    title: "service_1_title[0].text",
    text: "service_1_text[0].text",
  },
  {
    icon: <GiGlassCelebration />,
    title: "service_2_title[0].text",
    text: "service_2_text[0].text",
  },
  {
    icon: <FaBusinessTime />,
    title: "service_3_title[0].text",
    text: "service_3_text[0].text",
  },
]

export const getServices = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        service_1_title
        service_1_text
        service_2_title
        service_2_text
        service_3_title
        service_3_text
      }
    }
  }
`
