import * as React from "react"
import styled from "@emotion/styled";
import { BoxFace } from '../components/styles';
import { mq } from "./breakpoints";
import { FrontFace, BackFace, LeftFace, RightFace, TopFace, BottomFace } from "./box/faces";
import About from "./about";

const BoxScene = styled.section`
  width: 100vw;
  height: 90vh;
  perspective:none;
  position: relative;
  z-index:10;
  @media (min-height: 320px) {
    height: 105vh;
  }
  ${mq[0]} {
    height: 80vh;
  }
  ${mq[2]} {
    height:95vh;
  }

  @media (min-height: 480px) {
    height: 105vh;
  }
  @media (min-height: 600px) {
    height: 93vh;
  }
  @media (min-height: 680px) {
    height: 95vh;
  }
  @media (min-height: 720px) {
    height: 92.5vh;
  }
  @media (min-height: 800px) {
    height: 96vh;
  }

  @media (min-height: 1024px) {
    height: 94vh;
  }
`
const BoxWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  transform-style: preserve-3d;
  transition: transform 0.75s cubic-bezier(0.65, 0.05, 0.36, 1);
  transform-origin: center center;
  ${props => props.value == "front" && `
     transform: translateZ(-50px) rotateY( 0deg);
  `}
  ${props => props.value == "back" && `
     transform: translateZ(-50px) rotateY(-180deg);
  `}
  ${props => props.value == "left" && `
     transform: translateZ(-150px) rotateY(90deg);
  `}
  ${props => props.value == "right" && `
     transform: translateZ(-150px) rotateY(-90deg);
  `}
  ${props => props.value == "top" && `
     transform: translateZ(-100px) rotateX(-90deg);
  `}
  ${props => props.value == "bottom" && `
     transform: translateZ(-100px) rotateX(90deg);
  `}
`

const Box = ({value}) =>{
  return(
    <BoxScene>
      <BoxWrapper value={value}>
        <RightFace style={BoxFace}>right</RightFace>
        <BottomFace style={BoxFace}><About/></BottomFace>
      </BoxWrapper>
    </BoxScene>
  )
}

export default Box
