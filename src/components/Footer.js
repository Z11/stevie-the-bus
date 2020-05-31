import React from "react"
import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Follow Us
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
      <div className={styles.contact}>
        steviethephotobus@gmail.com | 713-333-4930
      </div>
      <div className={styles.copyright}>
        copyright &copy; Stevie The Photo Bus {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
