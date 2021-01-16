import styled from "styled-components"
import { themes } from "./ColorStyles"
export const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;

  @media (min-width: 1100px) {
    max-width: 1100px;
    padding: 0;
  }
`

export const Button = styled.button`
  color: white;
  cursor: pointer;
  padding: 8px 20px;

  border: none;
  background: #ba4270;
  box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
  border-radius: 24px;
`

export const Input = styled.input`
  color: ${themes.light.text1};
  width: 330px;
  margin-top: -2px;
  margin-right: -12%;
  background: rgb(255, 255, 255);
  left: 0;

  border-top: 2px solid rgb(57, 61, 82);
  border-bottom: 2px solid rgb(57, 61, 82);
  border-right: none;
  border-left: none;
  outline: none;

  box-shadow: none;
  padding: 8px 20px;

  border: none;

  box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
  border-radius: 24px;
`
