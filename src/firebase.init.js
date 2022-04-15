// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPUMGvVbCci5nd9yWp6IjLxflvYjvq9A",
  authDomain: "react-router-firebase-intera.firebaseapp.com",
  projectId: "react-router-firebase-intera",
  storageBucket: "react-router-firebase-intera.appspot.com",
  messagingSenderId: "184126285403",
  appId: "1:184126285403:web:79ee16b51f491c2bf8c17e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;