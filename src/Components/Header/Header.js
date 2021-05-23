import React from 'react'
import styled from 'styled-components'

import HeaderLeft from './HeaderLeft'
import HeaderSearch from './HeaderSearch'
import HeaderRight from './HeaderRight'
const Header = () => {
    return (
       <HeaderWrapper>
           <HeaderLeft/>
           <HeaderSearch/>
           <HeaderRight/>
       </HeaderWrapper>
    )
}
const HeaderWrapper=styled.div
`
width:100%;
display:flex;
background-color:var(--slackColor);
padding:5px 0;




`

export default Header
