import express from 'express';
import forget from '../controllers/forget.js';
import reset from '../controllers/reset.js';

const router = express.Router();

router.post('/forget', forget);
router.patch('/reset/:token', reset);

export default router;
