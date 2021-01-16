import styled from "styled-components"
import { Link } from "gatsby"
import { themes } from "../../styles/ColorStyles"
import { VscMenu, VscChromeClose } from "react-icons/vsc"

export const Wrapper = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
`
export const HeaderGroup = styled.ul`
  // Grid

  margin: 2rem;
  display: flex;
  justify-content: space-around;
  // link elements
  li {
    display: none;
  }
  a {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    text-decoration: none;
    color: ${themes.light.text1};
  }
  // Desktop
  @media (min-width: 768px) {
    max-width: 1100px;
    display: grid;
    grid-template-columns: 150px 400px 1fr;
    justify-content: center;
    margin: 2rem auto;
    li {
      display: inline;
    }
  }
`

export const Brand = styled.div`
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
export const Links = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`
export const Btn = styled.div`
  margin-left: auto;
`

export const AsideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70vw;
  background-color: ${themes.dark.backgroundColor};
  transition: 850ms;
  z-index: 1000;

  hr {
    background: ${themes.dark.text2};

    margin: 1rem auto;
  }

  nav {
    height: 100%;
    padding: 2rem;
  }

  ul {
    font-size: 1.3rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100%;
  }

  a {
    text-decoration: none;

    color: ${themes.dark.text2};
  }

  .sm {
    color: ${themes.dark.text1};
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }
`
export const Hamburger = styled(VscMenu)`
  color: ${themes.light.text1};
  font-size: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
`
export const NoBurger = styled(VscChromeClose)`
  color: ${themes.dark.text1};
  font-size: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`
