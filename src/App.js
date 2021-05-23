import './App.css';
import Showcase from './Components/Showcase/Showcase'
import {useSelector,useDispatch} from 'react-redux'
import Signup from './Components/Signup/Signup'
import { useEffect, useState } from 'react';
import {login,logout} from './Store/Slices/userSlice'
import {auth} from './firebase'
import Spinner from './Components/Spinner/Spinner'
function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const[ loading,setLoading]=useState(true);
  useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  setLoading(false)
  if(user){

    dispatch(login(
      {
          displayName:user.displayName,
          photoUrl:user.photoURL,
          id:user.uid
      }
  ))
  }
  else
  {
    dispatch(logout())
  }
})



  },[])
  let app=null
  if(loading)
  {
    app=<Spinner/>
  }
  else
  {
    app=<Showcase/>
  }
  return (
    <div className="App">
      {user?app:<Signup/>}
   
    </div>
  )
}

export default App;
