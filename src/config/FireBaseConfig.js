// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import firebase from "firebase/compat/app"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx2CE-C1TwdWwodp0dzCiNs1OD4unIdpI",
  authDomain: "everywisesaying.firebaseapp.com",
  databaseURL:
    "https://everywisesaying-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "everywisesaying",
  storageBucket: "everywisesaying.appspot.com",
  messagingSenderId: "246315375824",
  appId: "1:246315375824:web:78e395abf09c7a8a06d2d5",
  measurementId: "G-0VF8G6SBKC",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authService = firebase.auth();
