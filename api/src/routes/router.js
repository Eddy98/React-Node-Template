import express from 'express';
import { addLogger } from '../middlewares/addLogger.js';
import { respondWithMessage } from '../middlewares/respondWithMessage.js';

const router = express.Router();

// middleware that is specific to this router, called each time
router.use(addLogger);

router.get('/', respondWithMessage);

export default router;
