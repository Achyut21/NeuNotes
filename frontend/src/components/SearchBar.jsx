// src/components/SearchBar.jsx
import { useState } from "react";
import api from "../services/api";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const { data } = await api.get(`/search?q=${encodeURIComponent(query)}`);
      setResults(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search notes, subjects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="ml-2 btn btn-primary">
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Results:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SearchBar;