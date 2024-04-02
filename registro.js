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
registro.addEventListener('click', (e) =>{
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
   // alert("email = " + email+" pass "+pass);
    createUserWithEmailAndPassword(auth, email, pass).then(cred => {
        alert("usuario creado");
        //auth.signOut();
        sendEmailVerification(auth.currentUser).then(() => {
            alert("Se ha enviado correo de verificaion");
        });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorCode +" "+errorMessage);
    });
});
