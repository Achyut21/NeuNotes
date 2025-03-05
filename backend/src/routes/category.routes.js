// backend/src/routes/category.routes.js
import express from 'express';
import { createCategory, getCategories } from '../controllers/category.controller.js';
import { verifyAuth } from '../middleware/firebaseAuth.js';
import { requireRole } from '../middleware/roleCheck.js';


const router = express.Router();

// Protected route: Only authenticated users can access these endpoints
router.get('/', verifyAuth, getCategories);
router.post('/', verifyAuth, createCategory);
router.post('/', verifyAuth, requireRole('faculty'), createCategory);


export default router;