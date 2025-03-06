// src/contexts/authStore.js
import { create } from "zustand";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import api from "../services/api"; // Axios instance

const useAuthStore = create((set) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const token = await user.getIdToken(true);
        console.log("Fetched token:", token);
        // Explicitly pass the token in the headers for the sync request:
        const { data } = await api.post(
          "/users/sync",
          {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Synced user data:", data);
        // Save user along with token and role from backend
        set({ user: { ...user, token, role: data.role || "STUDENT" } });
      } catch (error) {
        console.error("Error syncing user:", error);
        set({ user: { ...user, role: "STUDENT" } });
      }
    } else {
      set({ user: null });
    }
  });

  return {
    user: null,
    login: async () => {
      try {
        await signInWithPopup(auth, provider);
        // onAuthStateChanged will handle sync
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
