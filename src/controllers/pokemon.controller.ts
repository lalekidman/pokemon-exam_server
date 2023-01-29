import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorCodes, HttpErrorResponse, SuccessResponse} from '@app/common/http-response'
import {
  PokemonCreateUsecase
} from '@app/domain/pokemon/usecases'
export default class PokemonController {
  
  public addRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      trainer,
      name,
      type,
      stats = {
        attack: 0,
        defense: 0,
        speed: 0,
      }
    } = req.body

    try {
      const pokemon = await new PokemonCreateUsecase()
        .execute(trainer, {
          name,
          type,
          stats
        })
      res.status(HttpStatus.CREATED).send(SuccessResponse(pokemon))
    } catch (error) {
      new HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
          .track(ErrorCodes.CREATE_USER_DETAILS_FAILED)
          .throw()
    }
  }
}