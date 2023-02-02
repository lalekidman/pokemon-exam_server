import {Router} from 'express'
import AppController from '@app/controllers/league.controller'
import { LeagueSlotRoute } from './league-slot'
import { LeagueValidation } from './middlewares/league.middleware-validator'
import { formValidatorMiddleware } from '@app/common/helper'
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
      LeagueValidation.formValidationPipeline,
      formValidatorMiddleware,
      appController.addRoute
    )
    appRoute.patch('/:leagueId',
      LeagueValidation.formValidationPipeline,
      formValidatorMiddleware,
      appController.updateRoute
    )
    appRoute.get('/',
      appController.listRoute
    )
    appRoute.get('/:leagueId',
      appController.viewDetailsRoute
    )
    return appRoute
  }
}
