import express from 'express';
import { createSubcategory, getSubcategories, updateSubcategory, deleteSubcategory } from '../controllers/subcategory.controller.js';
import { verifyAuth } from '../middleware/firebaseAuth.js';
import { requireRole } from '../middleware/roleCheck.js';

const router = express.Router();

// Only faculty can create, update, or delete subcategories.
router.post('/', verifyAuth, requireRole('faculty'), createSubcategory);
router.put('/:id', verifyAuth, requireRole('faculty'), updateSubcategory);
router.delete('/:id', verifyAuth, requireRole('faculty'), deleteSubcategory);

// Getting subcategories is available to any authenticated user.
// Optionally, you can restrict this further if needed.
router.get('/:categoryId?', verifyAuth, getSubcategories);

export default router;