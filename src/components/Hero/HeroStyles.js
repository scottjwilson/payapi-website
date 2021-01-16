import styled from "styled-components"
import { device } from "../../styles/MediaQueries"
export const Row = styled.div`
  display: grid;
  place-items: center;
  grid-template-areas:
    "phone"
    "banner";

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-template-areas: "banner phone";
  }
`
export const Banner = styled.div`
  grid-area: banner;
  a {
    text-decoration: none;
    font-weight: 800;
  }
`

export const PhoneWrapper = styled.div`
  grid-area: phone;
`
