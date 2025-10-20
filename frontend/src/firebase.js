import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
};

// Initialize Firebase app and auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Utility function to trigger Google Sign-In popup
export const signInWithGoogle = () => signInWithPopup(auth, provider);
