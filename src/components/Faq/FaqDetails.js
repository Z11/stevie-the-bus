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
    prismic {
      allQuestion_categorys {
        edges {
          node {
            category_name
          }
        }
      }
    }
  }
`

const Faq = () => {
  const {
    allQuestion_categorys: { edges: edgeCategories },
    page: { pageTitle, questions },
  } = useStaticQuery(getFaqDetails).prismic

  const listOfCategories = edgeCategories.map((x, index) => {
    return { id: index, category: x.node.category_name[0].text }
  })

  const listOfFAQs = questions.map((x, index) => {
    return {
      id: index,
      category: x.category.categoryName[0].text,
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
          {listOfCategories.map(item => (
            <div
              className={styles.faqContainer}
              key={item.id}
              id={item.category.replace(/\s+/g, "")}
            >
              <div className={styles.faqCategoryTitle}>{item.category}</div>
              {listOfFAQs
                .filter(x => x.category === item.category)
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
