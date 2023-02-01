import {Router} from 'express'
import AppController from '@app/controllers/pokemon.controller'
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