import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../contexts/authStore";

const Login = () => {
  const { user, login } = useAuthStore();
  const navigate = useNavigate();

  // Redirect to Home if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image and Tagline (hidden on small screens) */}
      <div className="hidden md:flex md:w-2/3 bg-secondary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/80 z-10"></div>
        <div className="absolute inset-0 z-0">
          {/* This could be an image or animation */}
          <div className="h-full w-full bg-[url('https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative z-20 max-w-md p-8 text-white text-center">
          <h1 className="text-4xl text-{primary} md:text-5xl font-bold mb-4">NeuNotes</h1>
          <p className="text-xl text-white/90 mb-6">Your Academic Knowledge Hub</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/30 p-2 rounded-full">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span>Access high-quality study materials</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/30 p-2 rounded-full">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <span>Collaborate with other students</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/30 p-2 rounded-full">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Secure and private sharing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/3 flex items-center justify-center bg-white p-8 md:p-0">
        {/* Background for small screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-secondary/90 md:hidden z-0 bg-[url('https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg')] bg-cover bg-center"></div>
        
        <div className="w-full max-w-md z-10 relative">
          <div className="text-center mb-8 md:hidden">
            <h2 className="text-3xl font-extrabold text-white mb-2">NeuNotes</h2>
            <p className="text-white/80 font-medium">Your Academic Knowledge Hub</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6 hidden md:block">
              <h3 className="text-2xl font-bold text-gray-800">Welcome back</h3>
              <p className=" md:text-gray-600 mt-1">Sign in to continue to NeuNotes</p>
            </div>
            
            <div className="space-y-6">
              <button
                onClick={login}
                className="w-full flex justify-center items-center gap-3 bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285f4"/>
                </svg>
                Continue with Google
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <button
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Login with Gamil
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
            By signing in, you agree to NeuNotes&apos;{' '}
            <a href="#" className="font-medium text-primary hover:text-accent">
              Terms of Service
            </a>{' '}
            and{' '}
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