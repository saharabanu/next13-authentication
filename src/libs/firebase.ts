// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdfYSgKlygbxktFbr-3kClRzjynfngEdw",
  authDomain: "react-base-authentication.firebaseapp.com",
  projectId: "react-base-authentication",
  storageBucket: "react-base-authentication.appspot.com",
  messagingSenderId: "830916138302",
  appId: "1:830916138302:web:ccdfa28cf591bf623b086f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);