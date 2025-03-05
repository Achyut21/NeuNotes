// src/routes/search.routes.js
import express from 'express';
import { search } from '../controllers/search.controller.js';
import { verifyAuth } from '../middleware/firebaseAuth.js';

const router = express.Router();

router.get('/', verifyAuth, search);

export default router;