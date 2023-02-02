import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status'
import {SuccessResponse, ErrorResponse} from '@app/common/http-response'
import {
  PokemonCreateUsecase,
  PokemonViewDetailsUsecase,
  PokemonListUsecase
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
          stats: {
            attack: +stats.attack,
            speed: +stats.speed,
            defense: +stats.defense,
          }
        })
      res.status(HttpStatus.CREATED).send(SuccessResponse(pokemon))
    } catch (error: any) {
      console.log('error :>> ', error);
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }
  public viewDetailsRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      id = ''
    } = req.params

    try {
      const pokemon = await new PokemonViewDetailsUsecase()
        .getOne(id)
      res.status(HttpStatus.OK).send(SuccessResponse(pokemon))
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }

  public listRoute = async (
    req: Request,
    res: Response
  ) => {
    const {
      trainer_id = req.params.trainerId
    } = req.query as any

    try {
      const pokemon = await new PokemonListUsecase()
        .getList({
          trainer: trainer_id
        })
      res.status(HttpStatus.OK).send(SuccessResponse(pokemon))
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(ErrorResponse([error.message]))
    }
  }
}