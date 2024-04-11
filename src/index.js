// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOF9BmsAxSTp2E0cE-qLpQHEuQlr05bGQ",
  authDomain: "gettingstartedwithfireba-b42b0.firebaseapp.com",
  projectId: "gettingstartedwithfireba-b42b0",
  storageBucket: "gettingstartedwithfireba-b42b0.appspot.com",
  messagingSenderId: "502821372962",
  appId: "1:502821372962:web:69c79414b7cca35e83b67b",
  measurementId: "G-XNJY3LPJ2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)