import express from "express";
import { createUpload } from "../controllers/upload.controller.js";
import { verifyAuth } from "../middleware/firebaseAuth.js";

const router = express.Router();

router.post("/", verifyAuth, createUpload);

export default router;
