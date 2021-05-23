import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styled from 'styled-components'
import{useSelector} from 'react-redux'
const SideBarHeader = () => {
    const user = useSelector(state => state.user.user)
    return (
        <Wrapper>
<InfoContainer>
<h2>React Club</h2>

     
        <h5>    <FiberManualRecordIcon/> {user?user.displayName:""}</h5>
 
</InfoContainer>
<Edit/>
        </Wrapper>
    )
}
const Wrapper =styled.div `
display:flex;
justify-content:space-between;
padding:5px 10px;
border-bottom:1px solid rgba(128, 128, 128, 0.76);
border-top:1px solid rgba(128, 128, 128, 0.76);

`
const InfoContainer=styled.div `
>h2 
{
    font-size:20px;
}
>h5
{
    cursor: pointer;
    font-weight:lighter;
    opacity:0.8;
}
>h5:hover
{
    opacity:1;
}
.MuiSvgIcon-root{
    color:green;
    font-size:10px;
    
}
`


const Edit=styled(CreateIcon) `
background-color:white;
color:black;
padding:5px;
border-radius:100%;
cursor: pointer;
`

export default SideBarHeader
