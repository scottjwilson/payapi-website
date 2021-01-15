import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Phone, Circle } from "../../components/ImgComponents"
import { H1, BodyIntro } from "../../styles/TextStyles"
import { Container, Button, Input } from "../../styles/ComponentStyles"
const Hero = () => {
  return (
    <>
      <Container>
        <Row>
          <Banner>
            <H1>Start building with our APIs for absolutely free.</H1>
            <form>
              <Input type="text" placeHolder="Enter email address"></Input>
              <Button type="submit">Schedule a Demo</Button>
            </form>
            <BodyIntro>
              Have any questions?<Link to="/contact"> Contact us</Link>
            </BodyIntro>
          </Banner>
          <PhoneWrapper>
            <Phone />
          </PhoneWrapper>
        </Row>
      </Container>
    </>
  )
}

const Row = styled.div`
  display: grid;
  place-items: center;
  grid-template-areas:
    "phone"
    "banner";

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-template-areas: "banner phone";
  }
`
const Banner = styled.div`
  grid-area: banner;
  a {
    text-decoration: none;
    font-weight: 800;
  }
`

const PhoneWrapper = styled.div`
  grid-area: phone;
`
export default Hero
