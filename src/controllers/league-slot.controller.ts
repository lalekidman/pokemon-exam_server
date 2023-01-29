import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorCodes, HttpErrorResponse, SuccessResponse} from '@app/common/http-response'
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
      leagueId,
      type = '',
      participants = []
    } = req.body
    try {
      const league = await new LeagueViewDetailsUsecase().getOneStrict(leagueId)
      // slot create and then add the pokemons.
      const result = new LeagueSlotCreateUsecase()
        .execute(league, {
          type,
          participants
        })
      res.status(HttpStatus.CREATED).send(SuccessResponse(result))
    } catch (error) {
      new HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
          .track(ErrorCodes.CREATE_USER_DETAILS_FAILED)
          .throw()
    }
  }
}