import { Request, Response, NextFunction } from 'express';
import { expect, jest, test } from '@jest/globals';
import { addLogger } from './addLogger';

const req = <Request>{};
const res = <Response>{};
const next = <NextFunction>jest.fn();

jest.mock('../utils/logger', () => {
  return {
    logger: { debug: jest.fn(), info: jest.fn() },
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
    expect(req.logger!.debug).toHaveBeenCalledTimes(1);
    expect(req.logger!.info).toHaveBeenCalledTimes(1);
  });
});
