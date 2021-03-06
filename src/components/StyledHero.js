import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home, isIPad13 }) => {
  return (
    <BackgroundImage
      className={className}
      fluid={img}
      home={home}
      isIPad13={isIPad13}
      critical={true}
    >
      {children}
    </BackgroundImage>
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
    min-height: ${props => (props.home ? "30vh" : "20vh")};
  }

  /*  Tablets */
  @media screen and (min-width: 600px) and (max-width: 1100px) {
    min-height: ${props => (props.home ? "55vh" : "40vh")};
  }

  /*  Large devices (large desktops) */
  @media screen and (min-width: 1100px) and (max-width: 1600px) {
    &:before,
    &:after {
      position: ${props => (props.isIPad13 ? "scroll" : "fixed")};
      background-repeat: ${props => (props.isIPad13 ? "scroll" : "no-repeat")};
      background-attachment: ${props => (props.isIPad13 ? "scroll" : "fixed")};
    }
    min-height: ${props => (props.home ? "calc(95vh - 45px)" : "50vh")};
  }

  /*  Extra large devices (extra large desktops) */
  @media (min-width: 1600px) {
    &:before,
    &:after {
      position: "fixed";
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
    min-height: ${props => (props.home ? "calc(95vh - 45px)" : "50vh")};
  }
`
