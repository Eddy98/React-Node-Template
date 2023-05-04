const express = require('express');
const router = express.Router();

// middleware that is specific to this router, called each time
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  console.log('Api route hit');
  next();
});

router.get('/', (req, res) => {
  console.log('here');
  res.send({ message: 'Eduardo Graziano' });
});

module.exports = router;
