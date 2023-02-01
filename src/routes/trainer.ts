import {Router} from 'express'
import AppController from '@app/controllers/trainer.controller'
import PokemonController from '@app/controllers/pokemon.controller'
export class TrainerRoute {
  /**
   * expose the routes
   */
  public expose () {
    const appRoute = Router({
      mergeParams: true
    })
    const appController = new AppController()
    const pokemonController = new PokemonController()
    appRoute.post('/',
      appController.addRoute
    )
    appRoute.get('/',
      appController.listRoute
    )

    appRoute.get('/',
      appController.listRoute
    )
    appRoute.get('/:trainer/pokemons',
      pokemonController.listRoute
    )
    return appRoute
  }
}