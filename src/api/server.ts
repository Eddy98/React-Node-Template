import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import path from 'path';

import apiRouter from './routes/router';
import { addLogger } from './middlewares/addLogger';
const helmet = require('helmet');
// import path from 'path';

const app: Express = express();

app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'default-src': "'self'", // provided by default if `directives` are not supplied, but since I am supplying custom directives below, I have to add this as well
        'script-src': ["'self'", 'https://unpkg.com'], // for React and React DOM
        'style-src': ["'self'", "'unsafe-inline'"], // for Styled Components
      },
    },
  })
);

let publicRelativePath = '../../dist';

if (process.env.NODE_ENV === 'production') {
  publicRelativePath = `../${publicRelativePath}`;
}

app.use(express.static(path.join(__dirname, publicRelativePath)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, publicRelativePath, 'index.html'));
});

app.use('/api', <RequestHandler>addLogger);

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
