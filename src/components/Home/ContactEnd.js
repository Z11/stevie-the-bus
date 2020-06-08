import React from "react"
import Title from "../Title"
import styles from "../../css/contactEnd.module.css"
import btnStyle from "../../css/awesomeButton.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const getContactEnd = graphql`
  query {
    prismic {
      home_page(uid: "home_page_slug", lang: "en-us") {
        contact_end_title
        contact_end_text
      }
    }
  }
`

const ContactEnd = () => {
  const { contact_end_title, contact_end_text } = useStaticQuery(
    getContactEnd
  ).prismic.home_page

  return (
    <div>
      <section className={styles.contactEnd}>
        <Title title={contact_end_title[0].text} position="center"></Title>
        <div className={styles.contactEndCenter}>
          <article className={styles.contactEndInfo}>
            {contact_end_text.map((element, index) => {
              return <p key={index}>{element.text}</p>
            })}
          </article>
        </div>
        <div className={styles.contactEndCenter}>
          <Link to={"/../contact"}>
            <button className={btnStyle.learn}>Contact</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ContactEnd
