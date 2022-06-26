import * as React from "react"
import styled from "@emotion/styled";

const NavWrapper = styled.section`
  cursor: pointer;
  ${props => props.value == "bottom" && `
     color: #232129;
  `}
  ${props => props.value == "right" && `
     color: ghostwhite;
  `}
`

const NavigationHandler= ({value, children, style}) =>{
  return(
    <NavWrapper value={value} style={style}>
      {children}
    </NavWrapper>
  )
}

export default NavigationHandler
