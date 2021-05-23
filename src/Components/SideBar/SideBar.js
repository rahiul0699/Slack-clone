import React from 'react'
import styled from 'styled-components'
import SideBarHeader from './SideBarHeader'
import SideBarFooter from './SideBarFooter'

const SideBar = () => {
    return (
       <Wrapper>
        <SideBarHeader/>
       <SideBarFooter/>
       </Wrapper>
    )
}

const Wrapper=styled.div `
flex:0.3;
height:100vh;
color:white;

background-color:var(--slackColor);
`


export default SideBar
