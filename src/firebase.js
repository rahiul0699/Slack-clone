import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCp0NKE8VBy0CRKCjTCxASMdweJFXWRDP4",
    authDomain: "slackclone-8699b.firebaseapp.com",
    projectId: "slackclone-8699b",
    storageBucket: "slackclone-8699b.appspot.com",
    messagingSenderId: "535428596213",
    appId: "1:535428596213:web:95e14097952b4f7bce60bc"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebaseApp.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export  {db,auth,provider}