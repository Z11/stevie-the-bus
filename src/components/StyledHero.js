import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage
      className={className}
      fluid={img}
      home={home}
      critical={true}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  /* min-height controls height of hero image and impacts width */
  background: "none";
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  /* mobile */
  @media (max-width: 700px) {
    min-height: ${"50vh"};
  }
  /* desktop */
  @media (min-width: 700px) {
    min-height: ${props => (props.home ? "calc(95vh - 60px)" : "50vh")};
  }
`
