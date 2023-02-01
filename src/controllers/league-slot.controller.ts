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
      type = '',
      participants = []
    } = req.body
    const {
      leagueId = ''
    } = req.params

    try {
      // to validate if the league is existing.
      const league = await new LeagueViewDetailsUsecase().getOneStrict(leagueId)
      // slot create and then add the pokemons.
      const result = await new LeagueSlotCreateUsecase()
        .execute(league, {
          type,
          participants
        })
      res.status(HttpStatus.CREATED).send(SuccessResponse(result))
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }
}