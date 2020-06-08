import styled from "styled-components"

const Grid = styled.div`
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: 16rem;
  grid-gap: 0.5rem;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: 24rem;
  }
`

export default Grid
