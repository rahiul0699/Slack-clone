import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SideBarOptions from './SideBarOptions'
import {db} from '../../firebase'
import {useDispatch} from 'react-redux'
import {setChannel} from '../../Store/Slices/channelSlice'
import AddIcon from '@material-ui/icons/Add';
const SideBarChannels = () => {
    const [channelsList,setChannelsList]=useState()
const dispatch = useDispatch()

    useEffect(()=>{

        db.collection('channels').onSnapshot(snapshot=>{
setChannelsList(
    snapshot.docs.map(doc=>{
        return {
            id:doc.id,
            data:doc.data()
        }
    })
)

        })
    },[])


        const addChannelHandler=()=>{
         const channelName=prompt("Please enter channel name")
        db.collection('channels').add({
            name:channelName
        })
        .then((result)=>{
            dispatch(setChannel({id:result.id,name:channelName}))
        })
        .catch(error=>{
            alert(error.message)
        })
        }
const selectChannelHandler=(id,name)=>{
    // console.log("[SideBarChannels] Selected Channels")
dispatch(setChannel({id:id,name:name}))
}

    return (
        <Wrapper>
            <SideBarOptions Icon={AddIcon} title ={"Add Channels"} clicked={addChannelHandler}/>
            <Channels>

            
       {
           channelsList?.map(channel=>{
           return <SideBarOptions key ={channel.id} title ={channel.data.name} clicked={()=>selectChannelHandler(channel.id,channel.data.name)} />
           })
       }

            </Channels>
      
       
        </Wrapper>
    )
}
const Wrapper=styled.div `


`
const Channels=styled.div `

overflow-y:scroll;
height:120px;
/* Track */
::-webkit-scrollbar {
    display:none;
}
`

export default SideBarChannels
