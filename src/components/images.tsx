import * as React from "react"
import styled from "@emotion/styled";
import { mq} from "./breakpoints";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  position: relative;
  margin-left: 2%;
  ${mq[2]} {
    position:absolute;
    right:0;
    margin:10% 3% 0 0;
  }
  ${mq[3]} {
    right:0;
    margin:10% 10% 0 0;
  }

  @media(max-height: 760px) {
    display: none;
  }
`

const Images = () => {
  return(
    <Wrapper>
      <StaticImage
        src='../images/ProfilePic2x3.jpg'
        alt="profilePicture"
        placeholder="tracedSVG"
        layout="fixed"
         />
    </Wrapper>
  )
}
export default Images
