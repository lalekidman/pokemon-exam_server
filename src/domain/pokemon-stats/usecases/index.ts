import {
  PokemonStatsRepositoryGateway
} from '@app/persistent/repository/pokemon-stats'

import {
  makePokemonStatsCreateUsecase
} from './create'

const repositoryGateway = new PokemonStatsRepositoryGateway()

export const PokemonStatsCreateUsecase = makePokemonStatsCreateUsecase({
  repositoryGateway
})
