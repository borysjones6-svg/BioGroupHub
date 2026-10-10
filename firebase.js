
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDD0A8FrqCEFVEPIa3e-uPlDsmQOoYZBBk",
  authDomain: "biogrouphub.firebaseapp.com",
  projectId: "biogrouphub",
  storageBucket: "biogrouphub.firebasestorage.app",
  messagingSenderId: "561659842038",
  appId: "1:561659842038:web:afa6f0eb980efc711b4bd7",
  measurementId: "G-7V43W44MMS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
