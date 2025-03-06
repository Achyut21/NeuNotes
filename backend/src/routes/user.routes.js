// src/routes/user.routes.js
import express from "express";
import { syncUser, updateUserRole } from "../controllers/user.controller.js";
import { verifyAuth } from "../middleware/firebaseAuth.js";
import { requireRole } from "../middleware/roleCheck.js";

const router = express.Router();

// Sync authenticated user's data
router.post("/sync", verifyAuth, syncUser);

// Update a user's role (Admin only)
router.put("/role", verifyAuth, requireRole("ADMIN"), updateUserRole);

export default router;