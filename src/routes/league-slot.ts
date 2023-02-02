import {Router} from 'express'
import AppController from '@app/controllers/league-slot.controller'
import { LeagueSlotValidation } from './middlewares/league-slot.middleware-validator'
import { formValidatorMiddleware } from '@app/common/helper'
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
      LeagueSlotValidation.formValidationPipeline,
      formValidatorMiddleware,
      appController.addRoute
    )
    appRoute.get('/',
      appController.listRoute
    )
    return appRoute
  }
}