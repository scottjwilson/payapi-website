import React, { useState } from "react"
import { Link } from "gatsby"
import { Button } from "../../styles/ComponentStyles"
import { themes } from "../../styles/ColorStyles"
import styled from "styled-components"
import { Logo } from "../../components/ImgComponents"
import menu from "../../images/menu.svg"
import close from "../../images/close.svg"
import {
  Wrapper,
  HeaderGroup,
  Brand,
  Btn,
  Links,
  Hamburger,
  AsideBar,
  NoBurger,
} from "./HeaderStyles"
import { SidebarData } from "./SidebarData"

const Header = () => {
  const [show, setShow] = useState(false)

  const handleMenu = () => setShow(!show)

  return (
    <Wrapper>
      {" "}
      {show && (
        <AsideBar>
          <nav>
            <NoBurger onClick={handleMenu} />

            <hr />
            <ul>
              {" "}
              {SidebarData.map(link => (
                <li key={link.id}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
              <Button className="sm">Schedule a Demo</Button>
            </ul>
          </nav>
        </AsideBar>
      )}
      <HeaderGroup>
        <Brand>
          <Logo />
          <li>
            <span>pay</span>
            <span className="light">api</span>
          </li>
        </Brand>
        <Links>
          {SidebarData.map(link => (
            <li key={link.id}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </Links>
        <Btn>
          <li>
            <Button>Schedule a Demo</Button>
          </li>
        </Btn>
        <Hamburger onClick={handleMenu} />
      </HeaderGroup>
    </Wrapper>
  )
}

export default Header
