import {Router} from 'express'
import UserController from '@app/controllers/user.controller'
export class UserRoute {
  /**
   * expose the routes
   */
  public expose () {
    const appRoute = Router({
      mergeParams: true
    })
    const appController = new UserController()
    appRoute.post('/',
      appController.addRoute
    )
    return appRoute
  }
}