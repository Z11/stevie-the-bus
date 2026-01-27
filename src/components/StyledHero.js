'use client'

import React from "react"
import styled from "styled-components"

const StyledHero = ({ img, className, children, home, isIPad13, alt }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: img ? `url(${img})` : 'none',
      }}
      role="img"
      aria-label={alt || 'Hero image'}
    >
      {children}
    </div>
  )
}

export default styled(StyledHero)`
  /* min-height controls height of hero image and impacts width */
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;

  /*  Phones */
  @media screen and (min-width: 300px) and (max-width: 600px) {
    min-height: ${props => (props.home ? "calc(30vh + 60px)" : "20vh")};
    background-attachment: scroll;
    will-change: transform;
  }

  /*  Tablets */
  @media screen and (min-width: 600px) and (max-width: 1100px) {
    min-height: ${props => (props.home ? "60vh" : "40vh")};
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: contain !important;
    background-color: var(--offWhite);
  }

  /*  Large devices (large desktops) */
  @media screen and (min-width: 1100px) and (max-width: 1600px) {
    min-height: ${props => (props.home ? "calc(95vh - 45px + 79px)" : "50vh")};
    background-attachment: ${props => (props.isIPad13 ? "scroll" : "fixed")};
    background-repeat: no-repeat;
  }

  /*  Extra large devices (extra large desktops) */
  @media (min-width: 1600px) {
    min-height: ${props => (props.home ? "calc(95vh - 45px + 92px)" : "50vh")};
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`
