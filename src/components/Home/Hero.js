import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Phone, Circle } from "../../components/ImgComponents"
import { H1, BodyIntro } from "../../styles/TextStyles"
import { Container, Button, Input } from "../../styles/ComponentStyles"
const Hero = () => {
  return (
    <>
      <Circle />
      <Container>
        <Row>
          <Col>
            <H1>Start building with our APIs for absolutely free.</H1>
            <form>
              <Input type="text" placeHolder="Enter email address"></Input>
              <Button type="submit">Schedule a Demo</Button>
            </form>
            <BodyIntro>
              Have any questions?<Link to="/contact"> Contact us</Link>
            </BodyIntro>
          </Col>
          <Col>
            <Phone />
          </Col>
        </Row>
      </Container>
    </>
  )
}

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`
const Col = styled.div`
  a {
    text-decoration: none;
    font-weight: 800;
  }
  @media (max-width: 1100px) {
  }
`
export default Hero
