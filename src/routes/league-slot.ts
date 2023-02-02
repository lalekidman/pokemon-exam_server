import {Router} from 'express'
import AppController from '@app/controllers/league-slot.controller'
export class LeagueSlotRoute {
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
    return appRoute
  }
}