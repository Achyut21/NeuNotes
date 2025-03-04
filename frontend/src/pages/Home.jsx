import { useState } from "react";
import subjects from "../constants/subjects";
import SubjectCard from "../components/SubjectCards";
import useAuthStore from "../contexts/authStore";
import UploadNoteModal from "../components/uploadNoteModal";

const Home = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulated recent subjects (in a real app, these would come from user data)
  const recentSubjects = subjects.slice(0, 2);

  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
              Welcome back, {user?.displayName?.split(' ')[0] || 'Student'}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Continue your learning journey with NeuNotes. Access quality notes and study materials.
            </p>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 font-medium text-sm transition-colors border-b-2 ${
              activeTab === "all"
                ? "border-primary text-primary"
                : "border-transparent text-text-light hover:text-text hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Subjects
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm transition-colors border-b-2 ${
              activeTab === "recent"
                ? "border-primary text-primary"
                : "border-transparent text-text-light hover:text-text hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm transition-colors border-b-2 ${
              activeTab === "popular"
                ? "border-primary text-primary"
                : "border-transparent text-text-light hover:text-text hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-card">
            <div className="text-text-light text-sm mb-1">Total Notes</div>
            <div className="text-2xl font-bold text-text">24</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-card">
            <div className="text-text-light text-sm mb-1">Total Downloads</div>
            <div className="text-2xl font-bold text-text">128</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-card">
            <div className="text-text-light text-sm mb-1">Completed</div>
            <div className="text-2xl font-bold text-primary">8</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text mb-6">
          {activeTab === "all" ? "Explore Subjects" : 
           activeTab === "recent" ? "Recently Viewed" : "Popular Subjects"}
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(activeTab === "all" ? subjects : recentSubjects).map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </div>

      {/* Upload Note Modal */}
      <UploadNoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Home;
