import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";



const firebaseConfig = {

    apiKey: "AIzaSyC4nc_0ogwLIppSfdy70-vCKK6y_IgxAxo",

    authDomain: "mindcheck-808c8.firebaseapp.com",

    projectId: "mindcheck-808c8",

    storageBucket: "mindcheck-808c8.appspot.com",

    messagingSenderId: "815291352275",

    appId: "1:815291352275:web:aa3200e1bb6f58eaf3c026",

    measurementId: "G-RQVBQTXVWJ"

  };


  // Initialize Firebase
  
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app)

// Auth
document.getElementById('auth-button').onclick = autherize()

function autherize() {
const auth = getAuth();
const provider = new GoogleAuthProvider()
auth.useDeviceLanguage();

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log('here')
    console.log(credential, token, user)
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}