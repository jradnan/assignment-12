// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWQw1gdqvnAwHAiiT9l-BUk2F2SrXW7oE",
  authDomain: "assignment-12-de4ac.firebaseapp.com",
  projectId: "assignment-12-de4ac",
  storageBucket: "assignment-12-de4ac.appspot.com",
  messagingSenderId: "1030413593019",
  appId: "1:1030413593019:web:26f6e087d6436bca573c9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth