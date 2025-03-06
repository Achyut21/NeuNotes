// src/pages/Login.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../contexts/authStore";

const Login = () => {
  const { user, login, logout } = useAuthStore();
  const navigate = useNavigate();
  // Intended role for the current login attempt: "STUDENT" or "FACULTY_ADMIN"
  const [intendedRole, setIntendedRole] = useState("");

  // When the user logs in, check their role
  useEffect(() => {
    if (user) {
      // If intended role is STUDENT, user must have role STUDENT
      if (intendedRole === "STUDENT" && user.role !== "STUDENT") {
        alert("Access denied: you must be a Student to log in from this option.");
        logout();
      } 
      // For Faculty/Admin option, user role must be FACULTY or ADMIN
      else if (
        intendedRole === "FACULTY_ADMIN" &&
        !(user.role === "FACULTY" || user.role === "ADMIN")
      ) {
        alert("Access denied: you must be a Faculty or Admin to log in from this option.");
        logout();
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [user, intendedRole, navigate, logout]);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image and Tagline (hidden on small screens) */}
      <div className="hidden md:flex md:w-2/3 bg-secondary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/80 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative z-20 max-w-md p-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NeuNotes</h1>
          <p className="text-xl text-white/90 mb-6">Your Academic Knowledge Hub</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/30 p-2 rounded-full">
                {/* You can insert an icon here */}
              </div>
              <span>Access high-quality study materials</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/30 p-2 rounded-full">
                {/* You can insert an icon here */}
              </div>
              <span>Collaborate with other students</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/30 p-2 rounded-full">
                {/* You can insert an icon here */}
              </div>
              <span>Secure and private sharing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/3 flex items-center justify-center bg-white p-8 md:p-0">
        <div className="w-full max-w-md z-10 relative">
          <div className="text-center mb-8 md:hidden">
            <h2 className="text-3xl font-extrabold text-white mb-2">NeuNotes</h2>
            <p className="text-white/80 font-medium">Your Academic Knowledge Hub</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6 hidden md:block">
              <h3 className="text-2xl font-bold text-gray-800">Welcome back</h3>
              <p className="md:text-gray-600 mt-1">Sign in to continue to NeuNotes</p>
            </div>

            <div className="space-y-6">
              {/* Student Login Button */}
              <button
                onClick={() => {
                  setIntendedRole("STUDENT");
                  login();
                }}
                className="w-full flex justify-center items-center gap-3 bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                {/* Insert Google icon here */}
                Continue with Google as Student
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
              
              {/* Faculty/Admin Login Button */}
              <button
                onClick={() => {
                  setIntendedRole("FACULTY_ADMIN");
                  login();
                }}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Continue with Google as Faculty/Admin
              </button>

            

              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a href="#" className="font-medium text-primary hover:text-accent">
                    Need help signing in?
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-center text-sm text-white md:text-gray-500">
            By signing in, you agree to NeuNotes&apos;{" "}
            <a href="#" className="font-medium text-primary hover:text-accent">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-primary hover:text-accent">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
