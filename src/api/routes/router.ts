import express, { RequestHandler } from 'express';
import { respondWithMessage } from '../middlewares/respondWithMessage';

const router = express.Router();

router.get('/', <RequestHandler>respondWithMessage);

export default router;
