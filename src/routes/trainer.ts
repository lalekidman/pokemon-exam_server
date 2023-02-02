import {Router} from 'express'
import AppController from '@app/controllers/trainer.controller'
import PokemonController from '@app/controllers/pokemon.controller'
import { TrainerValidation } from './middlewares/trainer.middleware-validator'
import { formValidatorMiddleware } from '@app/common/helper'
export class TrainerRoute {
  /**
   * expose the routes
   */
  public expose () {
    const appRoute = Router({
      mergeParams: true
    })
    const appController = new AppController()
    const pokemonController = new PokemonController()
    appRoute.post('/',
      TrainerValidation.formValidationPipeline,
      formValidatorMiddleware,
      appController.addRoute
    )
    appRoute.get('/',
      appController.listRoute
    )

    appRoute.get('/',
      appController.listRoute
    )
    appRoute.get('/:trainerId/pokemons',
      pokemonController.listRoute
    )
    return appRoute
  }
}