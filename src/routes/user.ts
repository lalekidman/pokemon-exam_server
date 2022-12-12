import {Router} from 'express'
import UserController from '@app/controllers/user.controller'
// const multiPartMiddleWare = require('connect-multiparty')()
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