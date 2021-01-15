import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

import { Logo } from "../components/ImgComponents"

const Footer = () => {
  return (
    <Wrapper>
      {" "}
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
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: ${themes.dark.backgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
`

const FooterGroup = styled.ul`
  max-width: 1100px;
  margin: 2rem auto;
  display: grid;

  grid-template-columns: 150px 400px 1fr;
  li {
    list-style: none;
  }

  a {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    text-decoration: none;
    color: ${themes.light.text1};
  }
`

const Brand = styled.div`
  color: ${themes.light.text1};
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
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Links = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`
const Socials = styled.div`
  margin-left: auto;
`

export default Footer
