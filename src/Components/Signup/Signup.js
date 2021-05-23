import React from 'react'
import styled from 'styled-components'
import {auth,provider} from '../../firebase'
import {login} from '../../Store/Slices/userSlice'
import {useDispatch} from 'react-redux'
const Signup = () => {
    const dispatch = useDispatch()
    const signinHandler=()=>{
        auth .signInWithPopup(provider)
        .then((result) => {
        let user=result.user
        dispatch(login(
            {
                displayName:user.displayName,
                photoUrl:user.photoURL,
                id:user.uid
            }
        ))
        }).catch((error) => {
         alert(error.message)
        });
    }
    return (
       <Wrapper>
           <Container>
<img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack_Logo" />
     <AuthContainer onClick={signinHandler}>
         <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="Google"  / >
        <h3>SignIn with Google</h3>
     </AuthContainer>
           </Container>
       </Wrapper>
    )
}
const Wrapper=styled.div ` 
height:100vh;
width:100%;
background-color:var(--slackColor);
display:flex;
justify-content:center;
align-items:center;
`
const Container=styled.div ` 

height:500px;
width:500px;

display:flex;

align-items:center;
flex-direction:column;
>img {
    height:200px;
    width:200px;
 
    
}
`
const AuthContainer=styled.div ` 
display:flex;
background-color:white;
justify-content:center;
align-items:center;
width:80%;
padding:10px;
margin-top:100px;
opacity:0.8;
cursor:pointer;
img {
    height:20px;
    width:20px;
    object-fit:cover;
    margin-right:20px;
}
:hover {
    opacity:1;
}
`
export default Signup
