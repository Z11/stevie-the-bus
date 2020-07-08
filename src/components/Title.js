import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  h4 {
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }

  @media screen and (min-width: 300px) and (max-width: 600px) {
    h4 {
      font-size: 2rem;
      text-align: center;
      letter-spacing: 0.5px;
    }
  }

  /*  Large devices (large desktops) */
  @media screen and (min-width: 600px) and (max-width: 1600px) {
    h4 {
      font-size: 2rem;
      text-align: ${props => (props.position ? props.position : "left")};
      letter-spacing: 0.7px;
    }
    span {
      display: inline-block;
    }
  }

  /*  Extra large devices (extra large desktops) */
  @media (min-width: 1600px) {
    h4 {
      font-size: 2.6rem;
      text-align: ${props => (props.position ? props.position : "left")};
      letter-spacing: 1px;
    }
    span {
      display: inline-block;
    }
  }
`
