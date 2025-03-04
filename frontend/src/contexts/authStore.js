// src/context/authStore.js
import { create } from "zustand";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const useAuthStore = create((set) => {
  // Subscribe to Firebase auth state changes
  onAuthStateChanged(auth, (user) => {
    // When Firebase updates the user, update our store
    set({ user: user || null });
  });

  return {
    user: null,
    login: async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        set({ user: result.user });
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    logout: async () => {
      await auth.signOut();
      set({ user: null });
    },
  };
});

export default useAuthStore;
