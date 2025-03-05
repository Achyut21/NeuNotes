// src/middleware/errorHandler.js
export default function errorHandler(err, req, res, next) {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "An unexpected error occurred" });
  }