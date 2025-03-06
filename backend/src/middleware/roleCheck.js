export const requireRole = (requiredRole) => {
    return (req, res, next) => {
      // Assume req.user is populated by verifyAuth middleware.
      // Also assume req.user.role is available (e.g., "STUDENT", "FACULTY", or "ADMIN")
      if (!req.user || req.user.role !== requiredRole) {
        return res.status(403).json({ error: "Access denied: insufficient permissions" });
      }
      next();
    };
  };