import {Router} from 'express'
import {
  TrainerRoute
} from './trainer'
export class AppRoute {
  
  constructor () {
  }
  /**
   * public routes are the routes that can be access even the user is not authenticated.
   */
  public publicRoutes () {
    const appRoute = Router({
      mergeParams: true
    })
    appRoute.use("/users", new TrainerRoute().expose())
    return appRoute
  }
  /**
   * expose the routes
   */
  public expose () {
    const appRoute = Router({
      mergeParams: true
    })
    // appRoute.use("/", this.privateRoutes())
    appRoute.use("/api", this.publicRoutes())
    return appRoute
  }
}