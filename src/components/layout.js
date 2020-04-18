import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../css/layout.css"

// used for smooth-scroll library to smoothly move to sections in a page
// ref: https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
