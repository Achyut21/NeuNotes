// src/routes/auth.routes.js
import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/auth.controller.js';
import { verifyAuth } from '../middleware/firebaseAuth.js';

const router = express.Router();

// Get the authenticated user's profile
router.get('/profile', verifyAuth, getUserProfile);

// Update the authenticated user's profile
router.put('/profile', verifyAuth, updateUserProfile);

export default router;