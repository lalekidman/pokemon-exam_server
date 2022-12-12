import { Request, Response, NextFunction } from 'express';
import passport from 'passport'
import HttpStatus from 'http-status'

import { HttpErrorResponse, ErrorCodes } from '@app/common/http-response';

const JWTAuthBearerHandler = (req: Request, res: Response, next: NextFunction) => () => (error: any, data: any, errCode: any) {
  if (errCode) {
    res.status(HttpStatus.UNAUTHORIZED).send(new HttpErrorResponse(ErrorCodes.INVALID_ACCESS_TOKEN_FORMAT))
    return
  } else if (error) {
    if (error.statusCode) {
      res.status(HttpStatus.UNAUTHORIZED).send(error)
      return
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send(new HttpErrorResponse(ErrorCodes.ACCESS_TOKEN_EXPIRED))
      return
    }
  } else {
    req.user = data
    next()
  }
}

export const JWTAuthBearer = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    return passport.authenticate([
      'jwt'
    ], {session: false}, JWTAuthBearerHandler(req, res, next)) (req, res, next)
  }
}
