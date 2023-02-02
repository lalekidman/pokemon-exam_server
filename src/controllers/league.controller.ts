import {Request, Response} from 'express'
import * as HttpStatus from 'http-status'
import {ErrorResponse, SuccessResponse} from '@app/common/http-response'
import {
  LeagueCreateUsecase,
  LeagueViewDetailsUsecase,
  LeagueListUsecase,
  LeagueUpdateUsecase
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
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }
  public updateRoute = async (
    req: Request,
    res: Response
  ) => {
    const {leagueId = ''} = req.params
    const {
      title,
      location,
      terrain,
      pokemonMaxStats,
      requiredSlotSize
    } = req.body
    try {
      const league = await new LeagueUpdateUsecase()
        .execute(leagueId, {
          title,
          location,
          terrain,
          pokemonMaxStats,
          requiredSlotSize
        })
      res.status(HttpStatus.ACCEPTED).send(SuccessResponse(league))
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }

  public viewDetailsRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      leagueId
    } = req.params
    console.log('req.params :>> ', req.params);
    try {
      const league = await new LeagueViewDetailsUsecase()
        .getOne(leagueId)
      res.status(HttpStatus.OK).send(SuccessResponse(league))
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
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
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }
}