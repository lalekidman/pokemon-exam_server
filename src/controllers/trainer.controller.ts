import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorCodes, HttpErrorResponse, SuccessResponse} from '@app/common/http-response'
import {
  TrainerCreateUsecase
} from '@app/domain/trainer/usecases'
export default class AppController {
  
  public addRoute = (
    req: Request,
    res: Response
  ) => {
    const {
      firstName = '',
      lastName = '',
    } = req.body
    new TrainerCreateUsecase()
      .execute({
        firstName,
        lastName
      })
      .then((user) => {
        res.status(HttpStatus.CREATED).send(SuccessResponse(user))
      })
      .catch((error) => {
        // ## TODO ##
        // - how could I support the error from Error object?
        new HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
          .track(ErrorCodes.CREATE_USER_DETAILS_FAILED)
          .throw()
      })
  }
}