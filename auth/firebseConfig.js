import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9Jtfjr4KS-tqf2WoWP90x6wcKiDmE9_4",
  authDomain: "gowheels-b24dc.firebaseapp.com",
  projectId: "gowheels-b24dc",
  storageBucket: "gowheels-b24dc.appspot.com",
  messagingSenderId: "159840842120",
  appId: "1:159840842120:web:e1fa3fbcccabc06440ca3d",
  measurementId: "G-32J6CHD0BG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
