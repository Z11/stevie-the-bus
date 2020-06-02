import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const getBusLogo = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        stevie_logo_desktop_image
        desktopBusLogo: stevie_logo_desktop_imageSharp {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        mobileBusLogo: stevie_logo_desktop_imageSharp {
          childImageSharp {
            fixed(width: 90) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const NavBar = () => {
  const { desktopBusLogo, mobileBusLogo } = useStaticQuery(
    getBusLogo
  ).prismic.home_page

  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={links[2].path} className={styles.logoBtn}>
            <Img
              fixed={mobileBusLogo.childImageSharp.fixed}
              alt="mobile bus logo"
            />
          </Link>
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
                  <Link to={item.path}>
                    <Img
                      fixed={desktopBusLogo.childImageSharp.fixed}
                      alt="desktop bus logo"
                    />
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
