const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Eduardo Graziano' });
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
