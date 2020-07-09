import styled from "styled-components"

const Grid = styled.div`
  display: grid;

  /*  Small devices (landscape phones) */
  @media screen and (min-width: 300px) and (max-width: 600px) {
    padding: 0rem 0.3rem 0.3rem 0.3rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-auto-rows: 15rem;
    grid-gap: 0.2rem;
  }

  /*  Large devices (large desktops) */
  @media screen and (min-width: 600px) and (max-width: 1600px) {
    padding: 0rem 0.5rem 0.5rem 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-auto-rows: 16rem;
    grid-gap: 0.3rem;
  }

  /*  Extra large devices (extra large desktops) */
  @media (min-width: 1600px) {
    padding: 0rem 1rem 1rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: 24rem;
    grid-gap: 0.5rem;
  }
`

export default Grid
