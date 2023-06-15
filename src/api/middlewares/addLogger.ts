import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

const addLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Time: ${Date.now()}`);
  logger.debug('Adding Logger to request');

  req.logger = logger;

  next();
};

export { addLogger };
