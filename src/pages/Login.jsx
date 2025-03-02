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
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/90 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-white mb-2">
          NeuNotes
        </h2>
        <p className="text-center text-white/80 font-medium">
          Your Academic Knowledge Hub
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Welcome back</h3>
            <p className="text-gray-600 mt-1">Sign in to continue to NeuNotes</p>
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

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">More options coming soon</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-accent">
                  Need help signing in?
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/70">
          By signing in, you agree to NeuNotes&apos;{' '}
          <a href="#" className="font-medium text-white hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="font-medium text-white hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;