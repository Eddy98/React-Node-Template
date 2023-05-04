import express from 'express';
import { Logger } from '../utils/logger.js';

const router = express.Router();
const logger = new Logger('API');

// middleware that is specific to this router, called each time
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  logger.debug('Hitting API route');
  next();
});

router.get('/', (req, res) => {
  console.log('here');
  res.send({ message: 'Eduardo Graziano' });
});

export default router;
