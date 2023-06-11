const respondWithMessage = (req, res) => {
  req.logger.debug('Sending response');
  res.send({ message: 'Eduardo Graziano' });
};

export { respondWithMessage };
