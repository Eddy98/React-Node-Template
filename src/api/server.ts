import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import apiRouter from './routes/router';
import { addLogger } from './middlewares/addLogger';

const app: Express = express();

app.use(cors());

app.use('/api', <RequestHandler>addLogger);

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
