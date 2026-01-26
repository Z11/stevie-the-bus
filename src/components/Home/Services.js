'use client'

import React from "react"
import Image from "next/image"
import styles from "../../css/services.module.css"

const Services = ({ data }) => {
  if (!data) return null

  const {
    service_1_title,
    service_1_text,
    service_1_image,
    service_2_title,
    service_2_text,
    service_2_image,
  } = data

  return (
    <section className={styles.services}>
      <div className={styles.serviceCenter}>
        <article key={1}>
          {service_1_image?.url && (
            <Image
              src={service_1_image.url}
              alt={service_1_image.alt || "Service 1"}
              width={500}
              height={370}
              sizes="(max-width: 600px) 80vw, (max-width: 1100px) 45vw, 500px"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          <div className={styles.serviceTitle}>
            {service_1_title?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
          <div className={styles.serviceDescription}>
            {service_1_text?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
        </article>
        <article key={2}>
          {service_2_image?.url && (
            <Image
              src={service_2_image.url}
              alt={service_2_image.alt || "Service 2"}
              width={500}
              height={370}
              sizes="(max-width: 600px) 80vw, (max-width: 1100px) 45vw, 500px"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          <div className={styles.serviceTitle}>
            {service_2_title?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
          <div className={styles.serviceDescription}>
            {service_2_text?.map((item, index) => <p key={index}>{item.text}</p>)}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
