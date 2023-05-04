const express = require('express');
const cors = require('cors');
const apiRouter = require('./src/routes/router');

const app = express();

app.use(cors());

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
