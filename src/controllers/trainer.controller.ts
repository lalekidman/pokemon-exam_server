import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorCodes, ErrorResponse, HttpErrorResponse, SuccessResponse} from '@app/common/http-response'
import {
  TrainerCreateUsecase,
  TrainerListUsecase
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
        res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
      })
  }
  
  public listRoute = (
    req: Request,
    res: Response
  ) => {
    new TrainerListUsecase()
      .getList()
      .then((trainers) => {
        res.status(HttpStatus.CREATED).send(SuccessResponse(trainers))
      })
      .catch((error) => {
        res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
      })
  }
}