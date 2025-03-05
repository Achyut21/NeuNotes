import express from "express";
import { createComment, getCommentsForUpload } from "../controllers/comment.controller.js";
import { verifyAuth } from "../middleware/firebaseAuth.js";

const router = express.Router();

router.post("/", verifyAuth, createComment);
router.get("/:uploadId", verifyAuth, getCommentsForUpload);

export default router;
