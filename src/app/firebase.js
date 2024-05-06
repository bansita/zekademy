// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwxnqwiakO-w1B4cpVY8KTS8LbYvyKnfc",
  authDomain: "nextapp-06.firebaseapp.com",
  projectId: "nextapp-06",
  storageBucket: "nextapp-06.appspot.com",
  messagingSenderId: "939395246015",
  appId: "1:939395246015:web:e49cb8e3c7f23cd318630a",
  measurementId: "G-X0P40W400E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app); // Initialize Firebase Authentication
export default app;
