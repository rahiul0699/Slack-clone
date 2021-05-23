import React from 'react'
import styled from 'styled-components'

import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../Store/Slices/userSlice' 
const HeaderLeft = () => {
   const user = useSelector(state => state.user.user)
//    console.log(user.photoUrl)
const dispatch = useDispatch()
   return (
        <Wrapper>
            
            <HeaderAvatar src={`${user?user.photoUrl:null}`} onClick={()=>dispatch(logout())}/>
        <AccessTimeIcon/>
        </Wrapper>
    )
}
const Wrapper=styled.div `
flex:0.3;
display:flex;
align-items:center;
color:white;
justify-content:space-between;


.MuiSvgIcon-root{
cursor:pointer;
}
`

const HeaderAvatar=styled(Avatar) `
cursor:pointer;
height:30px !important;
width:30px !important;
margin-left:10px;
:hover{
    opacity:0.8;
}
`

export default HeaderLeft
