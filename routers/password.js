import express from 'express';
import forgot from '../controllers/forgot.js';
import reset from '../controllers/reset.js';

const router = express.Router();

router.post('/forgot', forgot);
router.patch('/reset/:token', reset);

export default router;
