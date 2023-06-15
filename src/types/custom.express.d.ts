import { ServerSideLogger } from '../api/utils/logger';
import { RequestWithLog } from './logging';

declare module 'express' {
  interface Request {
    logger?: ServerSideLogger;
  }
}
