import {createSlice} from '@reduxjs/toolkit'

const channelSlice=createSlice({
    name:"channel",
    initialState:{
        name:null,
        id:null,
    },
    reducers:{
        setChannel:(state,action)=>{
            state.name=action.payload.name;
            state.id=action.payload.id;
        },
        resetChannel:(state,action)=>{
            state.name=null;
            state.id=null;
        }
    }
})

export const{setChannel,resetChannel}=channelSlice.actions
export default channelSlice.reducer