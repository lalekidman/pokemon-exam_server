import {Router} from 'express'
import AppController from '@app/controllers/pokemon.controller'
import { PokemonValidation } from './middlewares/pokemon.middleware-validator'
import { formValidatorMiddleware } from '@app/common/helper'
export class PokemonRoute {
  /**
   * expose the routes
   */
  public expose () {
    const appRoute = Router({
      mergeParams: true
    })
    const appController = new AppController()
    appRoute.post('/',
      PokemonValidation.formValidationPipeline,
      formValidatorMiddleware,
      appController.addRoute
    )
    appRoute.get('/',
      appController.listRoute
    )
    appRoute.get('/:id',
      appController.viewDetailsRoute
    )
    return appRoute
  }
}