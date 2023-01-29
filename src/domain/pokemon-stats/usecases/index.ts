import {
  PokemonStatsRepositoryGateway
} from '@app/persistent/repository/pokemon-stats'

import {
  makePokemonStatsCreateUsecase
} from './create'
import {
  makePokemonStatsViewDetailsUsecase
} from './view-details'

const repositoryGateway = new PokemonStatsRepositoryGateway()

export const PokemonStatsCreateUsecase = makePokemonStatsCreateUsecase({
  repositoryGateway
})

export const PokemonStatsViewDetailsUsecase = makePokemonStatsViewDetailsUsecase({
  repositoryGateway
})
