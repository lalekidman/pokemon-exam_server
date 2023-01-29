import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorCodes, HttpErrorResponse, SuccessResponse} from '@app/common/http-response'
import {
  LeagueCreateUsecase,
  LeagueViewDetailsUsecase,
  LeagueListUsecase
} from '@app/domain/league/usecases'
export default class PokemonController {
  
  public addRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      trainer,
      title,
      location,
      terrain,
      pokemonMaxStats,
      requiredSlotSize
    } = req.body
    try {
      const league = await new LeagueCreateUsecase()
        .execute(trainer, {
          title,
          location,
          terrain,
          pokemonMaxStats,
          requiredSlotSize
        })
      res.status(HttpStatus.CREATED).send(SuccessResponse(league))
    } catch (error) {
      new HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
          .track(ErrorCodes.CREATE_USER_DETAILS_FAILED)
          .throw()
    }
  }

  public viewDetailsRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      leagueId
    } = req.params
    try {
      const league = await new LeagueViewDetailsUsecase()
        .getOne(leagueId)
      res.status(HttpStatus.OK).send(SuccessResponse(league))
    } catch (error) {
      new HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
          .track(ErrorCodes.CREATE_USER_DETAILS_FAILED)
          .throw()
    }
  }
  
  public listRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      trainer = ''
    } = req.query as any
    try {
      const list = await new LeagueListUsecase()
        .getList({
          trainer
        })
      res.status(HttpStatus.OK).send(SuccessResponse(list))
    } catch (error) {
      new HttpErrorResponse(res, HttpStatus.BAD_REQUEST)
          .track(ErrorCodes.CREATE_USER_DETAILS_FAILED)
          .throw()
    }
  }
}