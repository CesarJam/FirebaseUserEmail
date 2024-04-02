 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
 import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js';
 

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCddm7XFuogNBSEPBPlWmNrZoSLjgyG9GI",
   authDomain: "usuarios-69068.firebaseapp.com",
   projectId: "usuarios-69068",
   storageBucket: "usuarios-69068.appspot.com",
   messagingSenderId: "540074062774",
   appId: "1:540074062774:web:2b925919e09a2976308717",
   measurementId: "G-8JTBCF35XG"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

login.addEventListener('click', (e) =>{
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    alert("email = " + email+" pass "+pass);
    signInWithEmailAndPassword(auth, email, pass).then(cred => {
        alert("usuario Logeado");
        console.log(cred.user)

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorCode +" "+errorMessage);
    });
});

cerrar.addEventListener('click', (e) =>{
    alert("vamos a cerrar");
    auth.signOut().then(() => {
        // Sign-out successful.
        alert("sesion cerrada");
      }).catch((error) => {
        // An error happened.
        alert("error al cerrar");
      });
});

auth.onAuthStateChanged(user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      console.log("usuario activo");
      var emailVerified= user.emailVerified;
      if(emailVerified){
        window.open("https:/www.google.com");
      }
      else{
        auth.signOut();
        alert("activar cuenta por correo electronico");
      }
      // ...
    } else {
      // User is signed out
      // ...
      console.log("usuario inactivo");
      
    }
  });