import React from "react"
import { Link } from "gatsby"
import { Phone } from "../ImgComponents"
import { H1, BodyIntro } from "../../styles/TextStyles"
import { Container, Button, Input } from "../../styles/ComponentStyles"
import { Row, Banner, PhoneWrapper } from "./HeroStyles"

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

export default Hero
