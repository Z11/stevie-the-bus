import React, { useState } from "react"
import styles from "../../css/faq.module.css"
import Title from "../Title"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"
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
    page,
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

  const [active, setActive] = useState("");

  return (
    <section className={styles.faqs}>
      <Title title={pageTitle[0].text} position="center" />
      <div className={styles.faqCenter}>
        <article key={1} className={styles.faqCategories}>
          {listOfCategories.map(item => (
            <div key={item.id}>
            <AnchorLink to={`/faq#${item.category.replace(/\s+/g, '')}`}>{item.category}</AnchorLink>
            </div>
          ))}
        </article>
        <article key={2} className={styles.faqDetails}>
          {listOfCategories.map(item => (
            <div key={item.id} id={item.category.replace(/\s+/g, '')}>
              <div className={styles.faqCategoryTitle} >{item.category}</div>
                {listOfFAQs
                  .filter(x => x.category === item.category)
                  .map(item => (
                    <Accordion key={item.id} title={item.question} description={item.answer} active={active} setActive={setActive}/>
                    // <div key={item.id}>
                    //   <p className={styles.faqQuestion}>{item.question}</p>
                    //   <p className={styles.faqAnswer}>{item.answer}</p>
                    //   <hr className={styles.border} />
                    // </div>
                  ))}
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default Faq
