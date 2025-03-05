// src/services/api.js
import axios from "axios";
import useAuthStore from "../contexts/authStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const { user } = useAuthStore.getState();
    if (user && typeof user.getIdToken === "function") {
      const token = await user.getIdToken();
      console.log("Attaching token:", token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
