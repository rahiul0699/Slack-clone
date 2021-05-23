import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
const HeaderSearch = () => {
    return (
       <Wrapper>
           <SearchBar>

           <SearchIcon/>

           <input placeholder="Search for community" />
           </SearchBar>
       </Wrapper>
    )
}

const Wrapper=styled.div `
flex:0.4;
/* background-color:yellowgreen; */
display:flex;
align-items:center;
justify-content:center;
`
const SearchBar=styled.div `

width:60%;
display:flex;
justify-content:center;
align-items:center;
padding:0 20px;
border:1px solid gray;
border-radius:5px;
>input 
{
    background-color:transparent;
    color:white;
    border:none;
    outline:none;
    width:100%;

}
.MuiSvgIcon-root{
    color:gray;
    margin-right:20px;
   cursor:pointer;
    
}

`
export default HeaderSearch
