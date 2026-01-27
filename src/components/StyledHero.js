'use client'

import React from "react"
import Image from "next/image"
import styled from "styled-components"

const StyledHero = ({ img, className, children, home, isIPad13, alt, priority }) => {
  return (
    <div className={className} role="img" aria-label={alt || 'Hero image'}>
      {img && (
        <Image
          src={img}
          alt={alt || 'Hero image'}
          fill
          priority={priority}
          quality={85}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      )}
      {children}
    </div>
  )
}

export default styled(StyledHero)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /*  Phones */
  @media screen and (min-width: 300px) and (max-width: 600px) {
    min-height: ${props => (props.home ? "calc(30vh + 60px)" : "20vh")};
  }

  /*  Tablets */
  @media screen and (min-width: 600px) and (max-width: 1100px) {
    min-height: ${props => (props.home ? "calc(55vh + 79px)" : "40vh")};
  }

  /*  Large devices (large desktops) */
  @media screen and (min-width: 1100px) and (max-width: 1600px) {
    min-height: ${props => (props.home ? "calc(95vh - 45px + 79px)" : "50vh")};
  }

  /*  Extra large devices (extra large desktops) */
  @media (min-width: 1600px) {
    min-height: ${props => (props.home ? "calc(95vh - 45px + 92px)" : "50vh")};
  }
`
