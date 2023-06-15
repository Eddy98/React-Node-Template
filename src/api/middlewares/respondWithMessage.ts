import { Request, Response } from 'express';

const respondWithMessage = (req: Request, res: Response) => {
  req.logger!.debug('Sending response');
  res.send({ message: 'Eduardo Graziano' });
};

export { respondWithMessage };
