import { expect, jest, test } from '@jest/globals';
import { addLogger } from './addLogger';

const req = jest.fn();
const res = jest.fn();
const next = jest.fn();

jest.mock('../utils/logger', () => {
  return {
    Logger: jest
      .fn()
      .mockImplementation(() => ({ debug: jest.fn(), info: jest.fn() })),
  };
});

describe('addLogger middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should add logger to req', () => {
    addLogger(req, res, next);
    expect(req.logger).toBeDefined();
  });

  test('should call next', () => {
    addLogger(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  test('should call debug and info', () => {
    addLogger(req, res, next);
    expect(req.logger.debug).toHaveBeenCalledTimes(1);
    expect(req.logger.info).toHaveBeenCalledTimes(1);
  });
});
