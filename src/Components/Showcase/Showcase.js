import React from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import Hero from '../Hero/Hero' 
const Showcase = () => {
    return (
        <Wrapper>
            <Header/>
            <Hero/>
        </Wrapper>
    )
}
const Wrapper=styled.div`
height:100vh;
width:100%;
;
`
export default Showcase
