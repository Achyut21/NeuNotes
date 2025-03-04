// backend/src/routes/index.js
import express from 'express';
import categoryRoutes from './category.routes.js';

const router = express.Router();

// You can add more route modules as you build more controllers
router.use('/categories', categoryRoutes);

export default router;