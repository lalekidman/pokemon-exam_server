import {
  PokemonRepositoryGateway
} from '@app/persistent/repository/pokemon'

import {
  makePokemonCreateUsecase
} from './create'

import {
  PokemonStatsCreateUsecase
} from '@app/domain/pokemon-stats/usecases'

const repositoryGateway = new PokemonRepositoryGateway()

export const PokemonCreateUsecase = makePokemonCreateUsecase({
  repositoryGateway,
  createPokemonStats: async (stats) => {
    try {
      const pokemonStats = await (new PokemonStatsCreateUsecase().execute(stats))
      return pokemonStats._id
    } catch (error: any) {
      throw new Error("Failed to create pokemon stats. \nMessage: " + error.message)
    }
  }
})
