// src/services/api.js
import axios from "axios";
import useAuthStore from "../contexts/authStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
    async (config) => {
      const { user } = useAuthStore.getState();
      if (user && user.token) {
        console.log("Attaching token from auth store:", user.token);
        config.headers.Authorization = `Bearer ${user.token}`;
      } else if (user && typeof user.getIdToken === "function") {
        // Fallback: try to fetch the token directly
        const token = await user.getIdToken(true);
        console.log("Attaching freshly fetched token:", token);
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
export default api;
