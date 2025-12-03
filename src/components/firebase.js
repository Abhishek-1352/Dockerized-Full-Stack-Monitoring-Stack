//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw-w9lgjX4fOzDzrwCp8mnrJiB35K8ihU",
  authDomain: "login-f66eb.firebaseapp.com",
  projectId: "login-f66eb",
  storageBucket: "login-f66eb.firebasestorage.app",
  messagingSenderId: "363363091496",
  appId: "1:363363091496:web:854bd1140d6b68326e211d",
  measurementId: "G-5QTL6SRMF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;