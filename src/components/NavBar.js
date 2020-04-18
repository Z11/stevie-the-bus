import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
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
          <img src={logo} alt="stevie bus logo" />
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
          {/* {
            <div>
              <AniLink fade to={links[1].path}>
                {links[1].text}
              </AniLink>
            </div>
          }
          {
            <div key={2}>
              <AniLink fade to={links[2].path}>
                {links[2].text}
              </AniLink>
            </div>
          }
          {
            <div key={3}>
              <AniLink fade to="/">
                <img src={logo} alt="stevie bus logo" />
              </AniLink>
            </div>
          }
          {
            <div key={4}>
              <AniLink fade to={links[3].path}>
                {links[3].text}
              </AniLink>
            </div>
          }
          {
            <div key={5}>
              <AniLink fade to={links[3].path}>
                {links[3].text}
              </AniLink>
            </div>
          } */}
          {links.map((item, index) => {
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
