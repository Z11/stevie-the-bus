'use client'

import React, { useState } from "react"
import styles from "../../css/faq.module.css"
import Title from "../Title"
import Accordion from "./Accordion/Accordion"

const Faq = ({ data }) => {
  const [active, setActive] = useState("")

  if (!data) return null

  const { pageTitle, questions } = data

  const listOfFAQs = questions?.map((x, index) => {
    return {
      id: index,
      question: x.question?.[0]?.text || '',
      answer: x.answer?.[0]?.text || '',
    }
  }) || []

  return (
    <section className={styles.faqs}>
      <Title title={pageTitle?.[0]?.text || 'FAQ'} position="center" />
      <div className={styles['faq-center']}>
        <div className={styles['faq-details']}>
            <div className={styles['faq-container']}>
              {listOfFAQs.map(item => (
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
