import { Middleware } from '../middleware/middleware.interface.js';
import { NextFunction, Request, Response } from 'express';
import { HttpMethod } from './http-method.enum.js';

export interface Route {
  path: string;
  method: HttpMethod;
  middlewares?: Middleware[];

  handler: (req: Request, res: Response, next: NextFunction) => void;
}
