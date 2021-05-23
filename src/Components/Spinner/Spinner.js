import React from 'react'
import styled from 'styled-components'
import SpinKit from 'react-spinkit'
const Spinner = () => {
    return (
        <Wrapper>
              <Container>
<img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack_Logo" />
<SpinKit name="ball-spin-fade-loader" color="#4A154B" fadeIn="none" style={{"height":"50px"}}/>
           </Container>
        </Wrapper>
    )
}
const Wrapper=styled.div ` 
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;

`
const Container=styled.div ` 

height:500px;
width:500px;

display:flex;

align-items:center;
flex-direction:column;
>img {
    height:200px;
    width:200px;
    margin-bottom:50px;
 
    
}
`
export default Spinner
