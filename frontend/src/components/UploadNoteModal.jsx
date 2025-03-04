import { useState } from "react";

const UploadNoteModal = ({ isOpen, onClose }) => {
  // Always call hooks at the top
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  // Then, conditionally return null if the modal isn't open
  if (!isOpen) return null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the values (you can integrate your backend later)
    console.log({ fileName, category, file });
    // Clear form and close modal
    setFileName("");
    setCategory("");
    setFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Upload New Note
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of the file <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter file name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category/Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter subject or category"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload your note <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-accent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-accent transition-colors"
            >
              Upload Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadNoteModal;
