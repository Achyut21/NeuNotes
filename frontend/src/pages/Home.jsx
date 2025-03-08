// src/pages/Home.jsx
import { useState, useEffect } from "react";
import useAuthStore from "../contexts/authStore";
import SubjectCard from "../components/SubjectCards";
import UploadNoteModal from "../components/UploadNoteModal";
import CreateCategoryModal from "../components/CreateCategoryModal";
import api from "../services/api"; // Axios instance for API calls

const Home = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState("all");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [categories, setCategories] = useState([]); // To store fetched categories

  // Fetch categories if user is Faculty or Admin
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    if (user) {
      fetchCategories();
    }
  }, [user]);
  
  const handleCategoryCreated = (newCategory) => {
    // Append new category to the local state
    setCategories((prev) => [...prev, newCategory]);
  };

  // For now, we're using static subjects for the lower section.
  // Later, you can replace 'subjects' with dynamic data fetched from your API.
  // const recentSubjects = subjects.slice(0, 2);
  // You may leave the subjects part unchanged if that's separate from category management.

  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
              Welcome back, {user?.displayName?.split(" ")[0] || "Student"}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Continue your learning journey with NeuNotes. Access quality notes and study materials.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Show "Create Category" button only for Faculty or Admin */}
              {user && (user.role === "FACULTY" || user.role === "ADMIN") && (
                <button
                  onClick={() => setIsCategoryModalOpen(true)}
                  className="btn btn-primary px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Create Category
                </button>
              )}
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="btn btn-primary px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Create New Note
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-black px-6 py-2 rounded-lg font-medium transition-colors">
                Browse All Subjects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.length === 0 ? (
          <p>No categories available yet.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat) => (
              <SubjectCard key={cat.id} subject={cat} />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <UploadNoteModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
      <CreateCategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onCategoryCreated={handleCategoryCreated}
      />
    </div>
  );
};

export default Home;