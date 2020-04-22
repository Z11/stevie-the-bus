import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import mobileBusLogo from "../images/stevie-logo-mobile.jpg"
import Img from "gatsby-image"

const getDesktopBusLogo = graphql`
  query desktopBusLogo {
    desktopBusLogo: file(
      relativePath: { eq: "stevie-the-photo-bus-logo-smaller.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const NavBar = () => {
  const { desktopBusLogo } = useStaticQuery(getDesktopBusLogo)
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to={links[2].path} className={styles.logoBtn}>
            <img src={mobileBusLogo} alt="stevie bus mobile logo" />
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
                    <Img
                      fixed={desktopBusLogo.childImageSharp.fixed}
                      alt="awesome landscape"
                    />
                  </AniLink>
                </li>
              )
            } else if (item.type === "link") {
              return (
                <li key={index}>
                  <div
                    role="button"
                    tabIndex={index}
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
                    tabIndex={index}
                    onClick={toggleNav}
                    onKeyDown={() => {}}
                  >
                    <AniLink fade to={item.path}>
                      {item.text}
                    </AniLink>
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
