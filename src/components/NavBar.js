import React, { useState } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "../css/navbar.module.css"
import AlignRight from "../svgs/alignRight.svg"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import IconStevie from "../svgs/stevie-logo.svg"

const NavBar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={links[3].path} className={styles.mobileLogoBtn}>
            <IconStevie />
          </Link>
          <button
            type="button"
            className={styles.logoAlignRight}
            onClick={toggleNav}
          >
            <AlignRight />
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
                <li key={index} className={styles.desktopLogoBtn}>
                  <Link to={item.path}>
                    <IconStevie aria-label="Home Page" />
                  </Link>
                </li>
              )
            } else if (item.type === "link") {
              return (
                <li key={index}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={toggleNav}
                    onKeyDown={() => {}}
                  >
                    <AnchorLink to={`/#${item.id}`}>{item.text}</AnchorLink>
                  </div>
                </li>
              )
            } else if (item.type === "page") {
              return (
                <li key={index}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={toggleNav}
                    onKeyDown={() => {}}
                  >
                    <Link to={item.path}>{item.text}</Link>
                  </div>
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
        <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
