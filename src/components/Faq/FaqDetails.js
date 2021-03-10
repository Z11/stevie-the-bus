import React, { useState } from "react"
import styles from "../../css/faq.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Accordion from "./Accordion/Accordion"

const getFaqDetails = graphql`
  query faqCategoryQueryAndFaqDetailsQuery {
    prismic {
      page: frequently_asked_questions(lang: "en-us", uid: "faq") {
        pageTitle: page_name
        heroSubtitle: hero_subtitle
        questions {
          question
          answer
          category {
            ... on PRISMIC_Question_category {
              categoryName: category_name
            }
          }
        }
        metaTitle: meta_title
        metaDescription: meta_description
        open_graph_image
      }
    }
  }
`

const Faq = () => {
  const {
    page: { pageTitle, questions },
  } = useStaticQuery(getFaqDetails).prismic

  const listOfFAQs = questions.map((x, index) => {
    return {
      id: index,
      question: x.question[0].text,
      answer: x.answer[0].text,
    }
  })

  const [active, setActive] = useState("")

  return (
    <section className={styles.faqs}>
      <Title title={pageTitle[0].text} position="center" />
      <div className={styles.faqCenter}>
        <div className={styles.faqDetails}>
            <div className={styles.faqContainer}>
              {listOfFAQs
                .map(item => (
                  <Accordion
                    key={item.id}
                    title={item.question}
                    description={item.answer}
                    active={active}
                    setActive={setActive}
                  />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
