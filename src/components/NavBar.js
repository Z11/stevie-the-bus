import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import mobileBusLogo from "../images/stevie-logo-mobile.jpg"
import desktopBusLogoWebp from "../images/stevie-the-photo-bus-logo-desktop.webp"
import desktopBusLogoPng from "../images/stevie-the-photo-bus-logo-desktop.png"

// const getDesktopBusLogo = graphql`
//   query desktopBusLogo {
//     desktopBusLogo: file(
//       relativePath: { eq: "stevie-the-photo-bus-logo-desktop.png" }
//     ) {
//       childImageSharp {
//         fixed(width: 200) {
//           # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
//           ...GatsbyImageSharpFixed_withWebp_noBase64
//         }
//       }
//     }
//   }
// `

const NavBar = () => {
  const [isOpen, setNav] = useState(false)

  // check if its safari
  const isSafari = () => {
    if (typeof window !== "undefined") {
      return (
        /constructor/i.test(window["HTMLElement"]) ||
        (function (p) {
          return p.toString() === "[object SafariRemoteNotification]"
        })(
          !window["safari"] ||
            (typeof window["safari"] !== "undefined" &&
              window["safari"].pushNotification)
        )
      )
    }
    return false
  }

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
                    <img
                      src={isSafari() ? desktopBusLogoPng : desktopBusLogoWebp}
                      alt="desktop Bus Logo"
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
