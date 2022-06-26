import * as React from "react"
import { useState } from 'react';
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import Box from '../components/box';
import { pageStyles} from '../components/styles';
import { mq } from "../components/breakpoints";
import Grid from "../components/grid";
import Nav from "../components/navigationHandler";
import "./styles.css";

const IndexPage = () => {
  const [view, setView] = useState('bottom');

  const FooterWrapper = styled.footer`
    font-size: 3em;
    margin: 0;
    width:100%;
    position: relative;
    bottom:0;
    ${mq[0]} {
      padding: 5% 10% 3% 5%;
      font-size: 0.75em;
    }
    ${mq[3]} {
      padding: 3% 10% 1% 5%;
      font-size: 1em;
    }

    ${view == "bottom" && `
    background: #232129;
    color: ghostwhite;
    animation: fadeInAnimation ease 2s;
    `}
    ${view == "right" && `
    background: white;
    animation: fadeInAnimation ease 2s;
    `}
    @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
  `
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Grid columns={2} style={{float:"right", maxHeight:"40px", gridColumnGap: "28px", marginRight:"5%", zIndex:20, position:"relative"}}>
        <Nav value={view} style={{textAlign:"center"}}>
          <h2 onClick={() => setView('bottom')}>About</h2>
        </Nav>
        <Nav value={view} style={{textAlign:"right"}}>
          <h2 onClick={() => setView('right')}>Projects</h2>
        </Nav>
      </Grid>

      <Box value={view}></Box>

      <FooterWrapper>
          Adriel Chandra <div style={{float:"right", marginRight:"10%"}}><FontAwesomeIcon icon={faCopyright} /> 2022 </div>
      </FooterWrapper>


    </main>
  )
}

export default IndexPage
