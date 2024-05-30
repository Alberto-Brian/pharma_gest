import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../core';

//* ensuredAuthenticated *//

export const ensuredAuthenticated = () => {

  return async (request: Request, response: Response, next: NextFunction) => {

    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response.status(401).json({ error: 'Token is missing' });
    }
    const [, token] = authHeaders.split(' ');


    try {
      const data = verify(token, JWT_SECRET!);
      request.body.user = data
      return next();
    } catch (err) {
      return response.status(401).json({ error: err })
    }
  }




}