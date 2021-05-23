import React from 'react'
import styled from 'styled-components'
import SideBar from '../SideBar/SideBar'
import ChatWindow from '../ChatWindow/ChatWindow'
const Hero = () => {
    
    return (
    <Wrapper>
        <SideBar/>
        <ChatWindow/>
    </Wrapper>
    )
}

const Wrapper=styled.div `
height:100vh;
width:100%;
display:flex;
position:fixed;
top:40px;
`

export default Hero
