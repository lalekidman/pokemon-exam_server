import {Router} from 'express'
import {
  TrainerRoute
} from './trainer'
import {
  PokemonRoute
} from './pokemon'
import {
  LeagueRoute
} from './league'
import {
  LeagueSlotRoute
} from './league-slot'
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
    appRoute.use("/trainers", new TrainerRoute().expose())
    appRoute.use("/pokemons", new PokemonRoute().expose())
    // appRoute.use("/leagues/:id/slot", new LeagueSlotRoute().expose())
    appRoute.use("/leagues", new LeagueRoute().expose())
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