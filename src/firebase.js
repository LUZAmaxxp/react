// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaPX1YBQic1uf1rPMhmu7SqGe-AOsQtL4",
  authDomain: "gaming-4aec6.firebaseapp.com",
  projectId: "gaming-4aec6",
  storageBucket: "gaming-4aec6.firebasestorage.app",
  messagingSenderId: "199517526618",
  appId: "1:199517526618:web:db52d109527f46b10c1663",
  measurementId: "G-M212PLVV4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
