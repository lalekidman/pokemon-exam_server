import { Request, Response, NextFunction } from 'express';
import passport from 'passport'
import HttpStatus from 'http-status'

import { HttpErrorResponse, ErrorCodes } from '@app/common/http-response';

const JWTAuthBearerHandler = (req: Request, res: Response, next: NextFunction) => () => (error: any, data: any, errCode: any) {
  if (errCode) {
    new HttpErrorResponse(res, HttpStatus.UNAUTHORIZED)
      .track(ErrorCodes.INVALID_ACCESS_TOKEN_FORMAT)
      .throw()
    return
  } else if (error) {
    new HttpErrorResponse(res, HttpStatus.UNAUTHORIZED)
      .track(ErrorCodes.ACCESS_TOKEN_EXPIRED)
      .throw()
    return
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
