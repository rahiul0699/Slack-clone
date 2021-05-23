import React from 'react'
import styled from 'styled-components'


const SideBarOptions = ({Icon,title,clicked}) => {
 
    let option=null;
    if(Icon)
    {
        option =(
            <>
            <Icon/>
            <h5>{title}</h5>
            </>
        )
    }
    else
    {
       option=( <>
        <h5><span>#</span>{title}</h5>
        </>)
    }
    return (
        <Wrapper onClick={clicked} >
          
{option}

        </Wrapper>
    )
}
const Wrapper =styled.div `
display:flex;
padding:8px;
align-items:center;
margin-top:10px;
opacity:0.8;
cursor:pointer;
:hover{
    opacity:1;
    background-color:#360d36;
}
>h5 
{
    font-weight:lighter;
}
.MuiSvgIcon-root{
    margin-right:10px;
    font-size:20px;
}
span {
    margin-right:10px;
}
`

export default SideBarOptions
