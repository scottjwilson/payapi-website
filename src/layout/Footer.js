import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Container } from "../styles/ComponentStyles"
import { Logo } from "../components/ImgComponents"

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterGroup>
          <Brand>
            <Logo />
            <li>
              <span>pay</span>
              <span className="light">api</span>
            </li>
          </Brand>
          <Links>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </Links>
          <Socials>
            <li>f t in</li>
          </Socials>
        </FooterGroup>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: ${themes.dark.backgroundColor};
`

const FooterGroup = styled.ul`
  color: ${themes.dark.text1};
  padding: 2rem 0;
  display: grid;
  grid-template-areas:
    "brand"
    "links"
    "socials";

  @media (min-width: 768px) {
    grid-template-columns: 150px 400px 1fr;
    grid-template-areas: "brand links socials";
  }
  li {
    list-style: none;
  }

  a {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    text-decoration: none;
    color: ${themes.dark.text1};
  }
`

const Brand = styled.div`
  display: flex;
  justify-content: center;
  grid-area: brand;
  color: ${themes.dark.text1};
  span {
    font-weight: 700;
  }
  .light {
    font-weight: 100;
  }
  li {
    font-size: 1.8rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media (min-width: 768px) {
    justify-content: start;
  }
`
const Links = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
const Socials = styled.div`
  grid-area: socials;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: grid;
  }
`

export default Footer
