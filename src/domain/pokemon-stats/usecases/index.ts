import {
  PokemonStatsRepositoryGateway
} from '@app/persistent/repository/mysql/entity/pokemon-stats'

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
