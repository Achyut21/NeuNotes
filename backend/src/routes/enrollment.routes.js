import express from "express";
import { enrollStudent, getEnrollments } from "../controllers/enrollment.controller.js";
import { verifyAuth } from "../middleware/firebaseAuth.js";

const router = express.Router();

// Protect these routes with authentication
router.post("/", verifyAuth, enrollStudent);
router.get("/", verifyAuth, getEnrollments);

export default router;
