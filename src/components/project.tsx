import * as React from "react"
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from "gatsby-plugin-image";
import { ProjectsData } from '../data/ProjectData';
import { mq } from "./breakpoints";

const CardWrapper = styled.div`
  width: 80vw;
  height: 75vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mq[1]} {
    width: 80vw;
    height: 90vh;
  }
  ${mq[2]} {
    width: 95vw;
    height: 99vh;
    flex-direction:row;
    flex-wrap:nowrap;
  }
  ${mq[3]} {
    width: 99vw;
    height: 80vh;
  }

`

const CardContainer = styled.div`
  width: 30vw;
  height: 35vh;
  margin: 1%;
  background: ghostwhite;
  display:block;
  min-height:150px;
  max-height:300px;
  transition: transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
  ${mq[0]} {
    width: 40vw;
    height: 30vh;
    margin: 5%;
  }
  ${mq[1]} {
    width: 35vw;
    height: 35vh;
    margin: 5%;
  }
  ${mq[2]} {
    width: 20vw;
    height: 55vh;
    min-height:350px;
    max-height:350px;
    margin: 2%;
    &:hover {
      transform: scale(1.2) translateY(-10px);
    }
  }
  ${mq[3]} {
    width: 35vw;
    height: 55vh;
    min-height:500px;
    max-height:500px;
    margin: 2%;
  }
  @media (min-height: 480px) {
    min-height:350px;
    max-height:350px;
  }
  @media (min-height: 640px) {
    min-height:450px;
    max-height:450px;
  }
`

const Container = styled.div`
  background: ghostwhite;
  position:relative;
  z-index:50;
  padding-top:1%;
  padding-bottom:5%;
  ${mq[2]} {
    padding-top:10%;
  }
`

const CardImg = styled.div`
  max-height:59%;
  img{
    width:100%;
  }
  ${mq[2]} {
    max-height:40%;
  }
  ${mq[2]} {
    max-height:55%;
  }
  ${mq[3]} {
    max-height:50%;
  }
`

const CardTitle = styled.h2`
  font-size:2em;
  ${mq[0]} {
    font-size:0.95em;
    margin:0 0 10% 5%;
  }
  ${mq[1]} {
    font-size: 1.25em;
    margin:0 0 10% 3%;
  }

  ${mq[2]} {
    font-size: 1.3em;
  }
  ${mq[3]} {
    font-size: 1.5em;
    margin:0 0 10% 1%;
  }
`

const CardDesc = styled.h3`
  font-size:1.5em;
  ${mq[0]} {
    font-size:0.70em;
    margin:5%;
  }
  ${mq[1]} {
    font-size:0.95em;
  }
  ${mq[2]} {
    font-size:0.95em;
    margin:0 0 10% 3%;
  }
  ${mq[3]} {
    font-size: 1em;
    margin:0 0 10% 1%;
  }
`

const Project = () =>{
  return(
    <CardWrapper>
      {ProjectsData.map(value => (
        <CardContainer key={value.id}>
          <a style={{textDecoration:"none", color:"inherit"}}href={`${value.url}`}>
            <CardImg>
              {value.title == "Djongers Weather" && <StaticImage
                src="../images/djongers.png"
                alt="profilePicture"
                placeholder="tracedSVG"
                layout="fullWidth"
                as="section"
                 />}
              {value.title == "Waroenk" && <StaticImage
                 src="../images/waroenk.png"
                 alt="profilePicture"
                 placeholder="tracedSVG"
                 layout="fullWidth"
                 as="section"
                  />}
              {value.title == "Refridate" && <StaticImage
                  src="../images/refridate.png"
                  alt="profilePicture"
                  placeholder="tracedSVG"
                  layout="fullWidth"
                  as="section"
                   />}
            </CardImg>
            <Container>
              <CardTitle>
                {value.title}
              </CardTitle>
              <CardDesc>
                {value.description}
              </CardDesc>
            </Container>
          </a>
        </CardContainer>
      ))}

      <CardContainer>
      <a style={{textDecoration:"none", color:"inherit"}}href="https://github.com/kaita2725/">
        <CardTitle style={{margin: "20% auto", width: "20vw", maxWidth:"250px",fontSize:"3vw", padding:"5%"}}>
          Visit my GitHub for more projects <FontAwesomeIcon icon={faRightLong} />
        </CardTitle>
      </a>
      </CardContainer>
    </CardWrapper>
  )
}

export default Project
