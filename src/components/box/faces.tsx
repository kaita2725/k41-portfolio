import styled from "@emotion/styled";
import {mq} from "../breakpoints";

export const FrontFace = styled.div`
  width: 100%;
  height: 100%;
  background: #232129;
  ${mq[0]} {
    transform: rotateY(0deg) translateZ(50.3vw);
  }
`
export const BackFace = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  ${mq[0]} {
    transform: rotateY(180deg) translateZ(50.1vw);
  }
`
export const LeftFace = styled.div`
  width: 35%;
  height: 100%;
  // background: black;
  ${mq[0]} {
    width: 100%;
    left: 0;
    transform: rotateY(-90deg) translateZ(49.5vw);
  }
`
export const RightFace = styled.div`
  width: 35%;
  height: 100%;
  background: #232129;
  ${mq[0]} {
    width: 100%;
    left: 0;
    transform: rotateY(90deg) translateZ(49.5vw);
  }
  ${mq[1]} {
    transform: rotateY(90deg) translateZ(50vw);
  }

`
export const TopFace = styled.div`
  width: 35%;
  height: 100%;
  background: white;
  ${mq[0]} {
    width: 100%;
    height: 100%;
    top: 0;
    transform: rotateX(90deg) translateZ(41.9ch);
  }
  ${mq[1]} {
    transform: rotateX(90deg) translateZ(39.5ch);
  }
  ${mq[2]} {
    min-height: 102%;
    transform: rotateX(90deg) translateZ(42.5ch);
  }
  ${mq[2]} {
    min-height: 102%;
    height: 1080px;
  }

`
export const BottomFace = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  ${mq[0]} {
    width: 100%;
    height: 100%;
    top: 0;
    transform: rotateX(-90deg) translateZ(41.9ch);
  }
  ${mq[1]} {
    transform: rotateX(-90deg) translateZ(39.5ch);
  }
  ${mq[1]} {
    transform: rotateX(-90deg) translateZ(41.9ch);
  }
`
