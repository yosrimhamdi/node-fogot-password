import express from 'express';
import forget from '../controllers/password/forget.js';
import reset from '../controllers/password/reset.js';

const router = express.Router();

router.post('/forget', forget);
router.post('/reset/:token', reset);

export default router;
