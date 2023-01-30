import {Router} from 'express'
import AppController from '@app/controllers/league.controller'
export class TrainerRoute {
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
