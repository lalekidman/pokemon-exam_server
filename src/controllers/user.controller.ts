import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorCodes} from '@app/common/http-response'
import {
  userCreateService,
} from './index'
export default class AppController {
  
  public addRoute = (req: Request, res: Response, next: NextFunction) => {
    const {
      firstName = '',
      lastName = '',
    } = req.body
    userCreateService()
      .execute({
        firstName,
        lastName
      })
      .then((user) => {
        res.status(HttpStatus.CREATED).send({
          success: true,
          result: user
        })
      })
      .catch(ErrorResponse(res, ErrorCodes.CREATE_USER_DETAILS_FAILED))
  }
  public updateRoute = (req: Request, res: Response, next: NextFunction) => {
  }
  public listRoute = (req: Request, res: Response, next: NextFunction) => {
  }
  public detailsRoute = (req: Request, res: Response, next: NextFunction) => {
  }
}