import {Router} from 'express'
import AppController from '@app/controllers/trainer.controller'
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
    return appRoute
  }
}