import express from 'express';
import cors from 'cors';
import apiRouter from './src/routes/router.js';

const app = express();

app.use(cors());

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
