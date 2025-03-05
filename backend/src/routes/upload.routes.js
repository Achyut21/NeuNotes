// src/routes/upload.routes.js
import express from "express";
import multer from "multer";
import { createUpload } from "../controllers/upload.controller.js";
import { verifyAuth } from "../middleware/firebaseAuth.js";

// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Use multer's middleware to parse file data with field name "file"
router.post("/", verifyAuth, upload.single("file"), createUpload);

export default router;
