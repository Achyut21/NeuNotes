import express from 'express';
import categoryRoutes from './category.routes.js';
import enrollmentRoutes from './enrollment.routes.js';
import uploadRoutes from './upload.routes.js';
import commentRoutes from './comment.routes.js';

const router = express.Router();

router.use('/categories', categoryRoutes);
router.use('/enrollments', enrollmentRoutes);
router.use('/uploads', uploadRoutes);
router.use('/comments', commentRoutes);

export default router;
