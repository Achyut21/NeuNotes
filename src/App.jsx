// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import useAuthStore from "./contexts/authStore";

const App = () => {
  const { user } = useAuthStore();

  // Apply different background colors to different pages
  useEffect(() => {
    if (window.location.pathname === '/login') {
      document.body.classList.add('login-page');
    } else {
      document.body.classList.remove('login-page');
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Only show navbar if not on login page */}
        {window.location.pathname !== '/login' && <Navbar />}
        
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        
        {/* Only show footer if not on login page */}
        {window.location.pathname !== '/login' && <Footer />}
      </div>
    </Router>
  );
};

export default App;