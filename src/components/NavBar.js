import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import logo from "../images/stevie-logo.jpg"

const NavBar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
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
                <li key={index}>
                  <AniLink fade to={item.path}>
                    <img src={logo} alt="stevie bus logo" />
                  </AniLink>
                </li>
              )
            }
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
