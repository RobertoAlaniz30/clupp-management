// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/storage";

import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-yYxcG57SB9obN7Ksh2aFmZZ2b-PjJvQ",
  authDomain: "react-login-c3a16.firebaseapp.com",
  projectId: "react-login-c3a16",
  storageBucket: "react-login-c3a16.appspot.com",
  messagingSenderId: "1058080041504",
  appId: "1:1058080041504:web:44701da8813ae949b6aa45",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storageRef = app.storage().ref();
export const auth = getAuth();
