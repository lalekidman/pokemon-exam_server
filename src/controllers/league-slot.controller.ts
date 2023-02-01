import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorCodes, ErrorResponse, HttpErrorResponse, SuccessResponse} from '@app/common/http-response'
import {
  LeagueSlotCreateUsecase
} from '@app/domain/league-slots/usecases'
import {
  LeagueViewDetailsUsecase
} from '@app/domain/league/usecases'
export default class AppController {
  
  public addRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      league,
      type = '',
      participants = []
    } = req.body
    try {
      // to validate if the league is existing.
      const leagueObject = await new LeagueViewDetailsUsecase().getOneStrict(league)
      // slot create and then add the pokemons.
      const result = await new LeagueSlotCreateUsecase()
        .execute(leagueObject, {
          type,
          participants
        })
      res.status(HttpStatus.CREATED).send(SuccessResponse(result))
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }
}