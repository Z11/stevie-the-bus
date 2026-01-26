'use client'

import React from "react"
import Image from "next/image"
import Title from "../Title"
import styles from "../../css/about.module.css"

const About = ({ data }) => {
  if (!data) return null

  const { about_image, about_text, about_title } = data

  return (
    <section className={styles.about} id="aboutStevie">
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <Title title={about_title?.[0]?.text || 'About Stevie'} position="left"></Title>
          <hr className={styles.border} />
          {about_text?.map((item, index) => <p key={index}>{item.text}</p>)}
        </article>
        <article>
          {about_image?.url && (
            <Image
              src={about_image.url}
              alt={about_image.alt || "Meet Stevie Photo"}
              width={500}
              height={400}
              sizes="(max-width: 600px) 80vw, (max-width: 1600px) 45vw, 550px"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </article>
      </div>
    </section>
  )
}

export default About
