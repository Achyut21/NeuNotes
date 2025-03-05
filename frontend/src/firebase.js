import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8gGYhg_-1TSBIlPJCxyCWcPWBBRs0EMU",
  authDomain: "neunotes-21.firebaseapp.com",
  projectId: "neunotes-21",
  storageBucket: "neunotes-21.firebasestorage.app",
  messagingSenderId: "1012336637127",
  appId: "1:1012336637127:web:d08541c4fab1404e27bae2"
};

// Initialize Firebase app and auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Utility function to trigger Google Sign-In popup
export const signInWithGoogle = () => signInWithPopup(auth, provider);
