import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import logo from "../images/stevie-logo.jpg"
import mobileLogo from "../images/stevie-logo-mobile.jpg"

const NavBar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to={links[2].path} className={styles.logoBtn}>
            <img src={mobileLogo} alt="stevie bus mobile logo" />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            if (item.type === "img") {
              return (
                <li key={index} className={styles.mainLogoBtn}>
                  <AniLink fade to={item.path}>
                    <img src={logo} alt="stevie bus logo" />
                  </AniLink>
                </li>
              )
            } else if (item.type === "link") {
              return (
                <li key={index}>
                  <AnchorLink to={`/#${item.id}`}>{item.text}</AnchorLink>
                </li>
              )
            } else if (item.type === "page") {
              return (
                <li key={index}>
                  <AniLink fade to={item.path}>
                    {item.text}
                  </AniLink>
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
