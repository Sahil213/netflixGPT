// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7fsDnfa6ZTk82pkfHIoa3PCWDL14itVQ",
  authDomain: "netflixgpt-72e82.firebaseapp.com",
  projectId: "netflixgpt-72e82",
  storageBucket: "netflixgpt-72e82.appspot.com",
  messagingSenderId: "567991306854",
  appId: "1:567991306854:web:c980ac269959caefeb7ba7",
  measurementId: "G-JCSJQ7F2Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();