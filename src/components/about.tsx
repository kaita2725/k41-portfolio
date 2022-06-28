import * as React from "react"
import styled from "@emotion/styled";
import { mq } from "./breakpoints";
import Grid from "../components/grid";
import ProfileImage from "../components/profileImage";
import {profileLinks} from '../data/profileData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescStyle = styled.p`
  text-align: left;
  margin:10%;
  padding:25;
  max-width: 55%;
  ${mq[0]} {
    margin: 20% 1% 1% 1%;
    max-width: 100%;
    font-size: 1.5em;
  }
  ${mq[1]} {
    margin: 15% 5% 1% 5%;
    max-width: 80%;
    font-size: 1.75em;
  }
  ${mq[2]} {
    max-width: 60vw;
    font-size: 2em;
  }
  ${mq[3]} {
    font-size: 2.5em;
  }


`

const ContactAnchor = styled.ul`
  margin:0;
  position:absolute;
  top: 80%;

  ${mq[0]} {
    transform: translate(-10%, 50%);
  }

  @media (min-height: 480px) {
    transform: translate(-10%, -10%);
  }
  @media (min-height: 640px) {
    transform: translate(-10%, -90%);
  }
  @media (min-height: 660px) {
    transform: translate(-10%, 15%);
  }
  @media (min-height: 800px) {
    transform: translate(-10%, 35%);
  }
  @media (min-height: 320px) and (min-height: 860px) {
    transform: translate(-10%, 50%);
  }

  ${mq[1]} {
    transform: translate(-10%, 30%);
  }
  ${mq[2]} {
    top:80%;
    margin-left:5%;
    padding:0;
    transform: translate(0);
    width: 35vw;
  }
  ${mq[3]} {
    top:75%;
    margin-left:5%;
    padding:0;
    width: 35vw;
  }
`
const ContactTitle = styled.p`
  text-align: center;
  margin:0;
  ${mq[0]} {
    text-align:left;
    padding:1.5%;
    font-size: 1.25em;
  }
  ${mq[2]} {
    padding:1%;
    font-size: 2em;
  }
  ${mq[3]} {
    padding:3%;
  }
`
const IconStyle = styled.div`
  width:100%;
  list-style: none;
  float: left;
  text-align: center;
  text-decoration: none;
  margin: 1% 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;

  ${mq[2]} {
    font-size: 0.75em;
  }
  ${mq[3]} {
    font-size: 1.2em;
  }
`
const ContactList = styled.li`
  font-weight: 600;
  font-size: 1.25em;
  transition: transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
  transform: scale(0.8);

  ${mq[0]} {
    font-size: 0.55em;
  }
  ${mq[1]} {
    font-size: 0.75em;
  }
  ${mq[2]} {
    &:hover {
      transform: scale(1) translateY(10px);
    }
  }
`

const About = () =>{
  return(
    <Grid columns={1} style={{maxHeight:"40px", gridColumnGap: "28px"}}>
      <DescStyle>
      Hello, my name is Adriel Chandra, based in Tangerang, Indonesia, who has interest in Cybersecurity on cloud computing or Full Stack developer on Websites or Application Development.
      In working environment, I am able to work in groups or individually.
      </DescStyle>
      <ProfileImage/>
      <ContactAnchor>
        < ContactTitle>
          Contacts
        </ ContactTitle>
        <IconStyle>
        {profileLinks.map(value => (
          <ContactList key={value.id}>
            {value.type == "link" ?
            <div>
              <a href={`${value.url}`} style={{color: "#353836"}}>
                <FontAwesomeIcon icon={value.icon} size="6x"/>
              </a>
              <p style={{marginTop:5}}>{value.text}</p>
            </div>
            :
            <div>
              <a href={`mailto: ${value.email}`} style={{color: "#353836"}}>
                <FontAwesomeIcon icon={value.icon} size="6x"/>
              </a>
              <p style={{marginTop:5}}>{value.text}</p>
            </div>
            }
          </ContactList>
        ))}
        </IconStyle>
      </ContactAnchor >
    </Grid>
  )
}

export default About
