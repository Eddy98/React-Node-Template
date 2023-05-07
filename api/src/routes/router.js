import express from 'express';
import { addLogger } from '../middlewares/addLogger.js';

const router = express.Router();

// middleware that is specific to this router, called each time
router.use(addLogger);

router.get('/', (req, res) => {
  res.send({ message: 'Eduardo Graziano' });
});

export default router;
