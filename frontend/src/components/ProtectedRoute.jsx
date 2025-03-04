// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import useAuthStore from "../contexts/authStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  // If not authenticated, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
