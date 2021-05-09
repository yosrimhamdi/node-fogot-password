import express from 'express';
import pug from 'pug';
import passwordRouter from './routers/password.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', 'views/');

app.use('/password', passwordRouter);

export default app;
