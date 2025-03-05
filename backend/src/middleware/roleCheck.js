// src/middleware/roleCheck.js
export const requireRole = (requiredRole) => {
    return (req, res, next) => {
      // Assume req.user.role exists; adjust as needed if you need to fetch from your database
      if (!req.user || req.user.role !== requiredRole) {
        return res.status(403).json({ error: "Access denied: insufficient permissions" });
      }
      next();
    };
  };