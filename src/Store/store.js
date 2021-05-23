import {configureStore,combineReducers} from '@reduxjs/toolkit'
import channelSlice from './Slices/channelSlice'
import userSlice from './Slices/userSlice'
const reducer=combineReducers({
channel:channelSlice,
user:userSlice
})
const store=configureStore(
{
    reducer
}
)

export default store