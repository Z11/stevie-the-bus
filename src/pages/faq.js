import React from "react"
import Layout from "../components/Layout"
import Faq from "../components/Faq/FaqDetails"
import SEO from "../components/seo"

export default function faq() {
  return (
    <Layout>
      <SEO title="Faq" />
      <Faq />
    </Layout>
  )
}
