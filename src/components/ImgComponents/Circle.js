import React from "react"
import styled from "styled-components"
import circleBg from "../../images/circle.svg"
const Circle = () => {
  return (
    <Wrapper>
      <img src={circleBg} alt="circle" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  img {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: -100;
    overflow: hidden;
  }
`
export default Circle
