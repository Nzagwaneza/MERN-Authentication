// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f6840.firebaseapp.com",
  projectId: "mern-auth-f6840",
  storageBucket: "mern-auth-f6840.appspot.com",
  messagingSenderId: "626588732326",
  appId: "1:626588732326:web:b84f772e9fe5cd114f9d67",
};

console.log(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
