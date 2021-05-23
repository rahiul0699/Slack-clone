import React from 'react'
import styled from 'styled-components'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
const HeaderRight = () => {
    return (
        <Wrapper>
            <HelpOutlineIcon/>
        </Wrapper>
    )
}
 const Wrapper=styled.div `
 flex:0.3;
display:flex;
/* background-color:blue; */
align-items:center;
justify-content:flex-end;
.MuiSvgIcon-root{
cursor:pointer;
margin-right:10px;
color:white;
}
 `
export default HeaderRight
