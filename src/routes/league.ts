import {Router} from 'express'
import AppController from '@app/controllers/league.controller'
import { LeagueSlotRoute } from './league-slot'
export class LeagueRoute {
  /**
   * expose the routes
   */
  public expose () {
    const appRoute = Router({
      mergeParams: true
    })
    const appController = new AppController()
    appRoute.use("/:leagueId/slots", new LeagueSlotRoute().expose())

    appRoute.post('/',
      appController.addRoute
    )
    appRoute.patch('/:id',
      appController.updateRoute
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
