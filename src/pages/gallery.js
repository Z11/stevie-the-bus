import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery/Gallery"
import SEO from "../components/seo"

export default function gallery() {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Gallery />
    </Layout>
  )
}
