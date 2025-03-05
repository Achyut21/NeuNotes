// src/contexts/authStore.js
import { create } from "zustand";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const useAuthStore = create((set) => {
  onAuthStateChanged(auth, (user) => {
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