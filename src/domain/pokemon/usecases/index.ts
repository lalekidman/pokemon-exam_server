import {
  PokemonRepositoryGateway
} from '@app/persistent/repository/mysql/entity/pokemon'

import {
  makePokemonCreateUsecase
} from './create'

import {
  makePokemonViewDetailsUsecase
} from './view-details'

import {
  PokemonStatsCreateUsecase,
  PokemonStatsViewDetailsUsecase
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

export const PokemonViewDetailsUsecase = makePokemonViewDetailsUsecase({
  repositoryGateway,
  getPokemonStats: new PokemonStatsViewDetailsUsecase().getOne
})
