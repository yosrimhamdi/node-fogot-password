import express from 'express';
import forget from './controllers/forget.js';
import reset from './controllersreset.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('password/forget', forget);
app.post('password/reset/:token', reset);

export default app;
