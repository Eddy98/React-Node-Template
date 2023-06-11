import express from 'express';
import cors from 'cors';
import apiRouter from './routes/router';

const app = express();

app.use(cors());

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
