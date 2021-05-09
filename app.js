import express from 'express';
import passwordRouter from './routers/password.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/password', passwordRouter);

export default app;
