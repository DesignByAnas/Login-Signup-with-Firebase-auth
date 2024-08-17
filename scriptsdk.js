// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdcVF5hkQGnxOwloNmScuHNN4ZxOkmnqA",
  authDomain: "login-signup-with-auth-6def3.firebaseapp.com",
  projectId: "login-signup-with-auth-6def3",
  storageBucket: "login-signup-with-auth-6def3.appspot.com",
  messagingSenderId: "1025794078398",
  appId: "1:1025794078398:web:34a13ebd1d3421c0dad0ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";

// Inputs
const loginEmail = document.getElementById('loginEmail').value;
const loginPassword = document.getElementById('loginPassword').value;
const signupEmail = document.getElementById('signupEmail').value;
const signupPassword = document.getElementById('signupPassword').value;
const signupConfirmPassword = document.getElementById('signupConfirmPassword').value;

// submit buttons
const Loginbtn = document.getElementById('Loginbtn')
Loginbtn.addEventListener("click", function(loginevent){
loginevent.preventDefault()
alert("Login")
})
const Signupbtn = document.getElementById('Signupbtn')
Signupbtn.addEventListener("click", function(signupevent){
signupevent.preventDefault()
alert("Login")
})