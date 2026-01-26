'use client'

import React from "react"
import Image from "next/image"
import Title from "../Title"
import styles from "../../css/packages.module.css"

const Packages = ({ data }) => {
  if (!data) return null

  const {
    packages_main_title,
    package_1_image,
    package_1_title,
    package_1_text,
    package_2_image,
    package_2_title,
    package_2_text,
    package_3_image,
    package_3_title,
    package_3_text,
    options_text,
  } = data

  return (
    <section className={styles.packages} id="packagesStevie">
      <Title title={packages_main_title?.[0]?.text || 'Packages'} position="center" />
      <div className={styles.packagesCenter}>
        <article key={1}>
          {package_1_image?.url && (
            <Image
              src={package_1_image.url}
              alt={package_1_image.alt || "Package 1"}
              width={300}
              height={300}
              sizes="(max-width: 600px) 80vw, (max-width: 1100px) 200px, (max-width: 1600px) 280px, 365px"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          <div className={styles.packageTitle}>
            {package_1_title?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
          <div className={styles.packageDescription}>
            {package_1_text?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
        </article>
        <article key={2}>
          {package_2_image?.url && (
            <Image
              src={package_2_image.url}
              alt={package_2_image.alt || "Package 2"}
              width={300}
              height={300}
              sizes="(max-width: 600px) 80vw, (max-width: 1100px) 200px, (max-width: 1600px) 280px, 365px"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          <div className={styles.packageTitle}>
            {package_2_title?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
          <div className={styles.packageDescription}>
            {package_2_text?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
        </article>
        <article key={3}>
          {package_3_image?.url && (
            <Image
              src={package_3_image.url}
              alt={package_3_image.alt || "Package 3"}
              width={300}
              height={300}
              sizes="(max-width: 600px) 80vw, (max-width: 1100px) 200px, (max-width: 1600px) 280px, 365px"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          <div className={styles.packageTitle}>
            {package_3_title?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
          <div className={styles.packageDescription}>
            {package_3_text?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
        </article>
      </div>
      <div className={styles.packageOptionsDescription}>
        {options_text?.map((item, index) => <p key={index}>{item.text}</p>)}
      </div>
    </section>
  )
}

export default Packages
