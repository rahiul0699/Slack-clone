import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput'
import Chats from './Chats'
import {useSelector} from 'react-redux'
const ChatWindow = () => {
    const channel = useSelector(state => state.channel)
     console.log("Chnnael->",channel)
    return (

     channel?.name?<Wrapper>
        <ChannelHeader>
            <ChannelInfo>
            
                <h3> {`# ${channel.name}`}</h3>
                
            
            <StarOutlineIcon/>
            </ChannelInfo>
            <InfoIcon/>
        </ChannelHeader >
        <Chats channelId={channel.id} channelName={channel.name}/>
        <ChatInput channelId={channel.id} channelName={channel.name}/>
     </Wrapper>:null
    )
}
const Wrapper =styled.div ` 
flex:0.7;

`
const ChannelHeader=styled.div `
position:sticky;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
background-color:whitesmoke;
padding:10px 0;
>.MuiSvgIcon-root{
    margin-right:10px
}
.MuiSvgIcon-root{
    cursor:pointer;
}
`
const ChannelInfo=styled.div ` 
display:flex;
margin-left:10px;
align-items:center;
.MuiSvgIcon-root{
    margin-left:10px
}
`
export default ChatWindow
