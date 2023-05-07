import { Logger } from '../utils/logger.js';

const addLogger = (req, res, next) => {
  const logger = new Logger('API');

  console.log('Time: ', Date.now());
  logger.debug('Adding Logger to request');

  req.logger = logger;

  next();
};

export { addLogger };
