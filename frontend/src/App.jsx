// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import useAuthStore from "./contexts/authStore";
//import './index.css';

const AppContent = () => {
  const location = useLocation();
  const { user } = useAuthStore();
  const isLoginPage = location.pathname === '/login';

  // Apply different background colors to different pages
  useEffect(() => {
    if (isLoginPage) {
      document.body.classList.add('login-page');
    } else {
      document.body.classList.remove('login-page');
    }
  }, [isLoginPage]);

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Navbar />}
      
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
      
      {!isLoginPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;