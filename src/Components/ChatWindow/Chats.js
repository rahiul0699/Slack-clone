import React, { createRef, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {db} from '../../firebase'
const Chats = ({channelId}) => {
    const channel=useSelector(state=>state.channel)
    const bottomRef=createRef()
    const [messageList,setMessageList]=useState()
console.log("[Chats.js]",channelId)
    useEffect(()=>{
      
      db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp','asc')
        .onSnapshot(snapshot=>{
         setMessageList 
         (snapshot.docs.map(doc=>{
               return{
                id:doc.id,   
                message:doc.data().message,
                userName:doc.data().user,
                userImage:doc.data().userImage,
                timestamp:doc.data().timestamp,
               }
            })
        )
        })
     

        
        //  console.log(bottomRef.current.scrollHeight+2)
      
    },[channelId])
  useEffect(()=>{
    console.log("here")
    bottomRef.current.scrollIntoView({
        behavior:"smooth",
    })
  })
    console.log("[Chats.js]",messageList)
    return (
        <Wrapper >

            {
                messageList?.map(message=>{
                    return <MessageContainer>
                        <img src={message.userImage} alt="UserImage"/>
                        <Message>
                        <h4>{message.userName} <span> {message.timestamp?.toDate().toUTCString()}</span></h4>
                        <p>{message.message}</p>
                        </Message>
                    </MessageContainer>

                })
            }
        <ChatBottom ref={bottomRef}/> 
        </Wrapper>
    )
}
const Wrapper=styled.div `
 
height:100%;
width:100%;
padding:10px 20px;
overflow-y:scroll;
::-webkit-scrollbar {
    display:none;
}
`

const MessageContainer=styled.div `
display:flex;
margin-bottom:15px;

width:800px;
>img {
height:50px;
width:50px;
object-fit:cover;
border-radius:5px;
margin-right:5px;
}
span {
    color:gray;
    font-size:10px;
    margin-left:5px;
}
p {
    font-weight:500;
}
`
const Message=styled. div`
  

`
const ChatBottom=styled.div ` 
padding-bottom:200px;
`
export default Chats
