import React from "react"
import Layout from "../components/Layout"
import Events from "../components/Events/Events"
import SEO from "../components/seo"

export default function faq() {
  return (
    <Layout>
      <SEO title="Events" />
      <Events />
    </Layout>
  )
}
