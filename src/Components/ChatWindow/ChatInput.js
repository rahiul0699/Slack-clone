import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import {db} from '../../firebase'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
const ChatInput = ({channelId,channelName}) => {
    const user = useSelector(state => state.user.user)
   const [userInput,setUserInput]=useState('')
    const onSendHandler=()=>{
     
        if(userInput)
        {
            db.collection('channels').doc(channelId).collection('messages').add({
                message:userInput,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user?.displayName,
                userImage:user?.photoUrl
            })
        }
        setUserInput('')

    }
  
    return (
        <Wrapper>
            <form >
                <input placeholder={`Message #${channelName}`} value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
                <button type="submit"onClick={(event)=>
            {event.preventDefault();
                onSendHandler()

            }} ></button>
            </form>
          

             <SendButton disabled={userInput?false:true} onClick={onSendHandler}/> 
            
            </Wrapper>
    )
}
const Wrapper=styled.div `  
width:500px;
background-color:whitesmoke;
display:flex;
border:1px solid black;
border-radius:2px;
padding:10px;
position:absolute;
bottom:50px;
left:50%;

form {
    /* width:100%; */
    flex:1;
}
form input 
{
    width:90%;
    padding:5px;
    border:none;
    background-color:transparent;
    font-weight:600;
}
form input:focus {
    outline:none;
}
form button {
    display:none;
}
>MuiSvgIcon-root{
    cursor:pointer;
}
`

const SendButton=styled(SendIcon) ` 
opacity:${props=>props.disabled?0.5:1};
cursor:pointer;
`
export default ChatInput
