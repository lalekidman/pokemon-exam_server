import {
  PokemonRepositoryGateway
} from '@app/persistent/repository/pokemon'

import {
  makePokemonCreateUsecase
} from './create'

const repositoryGateway = new PokemonRepositoryGateway()

export const PokemonCreateUsecase = makePokemonCreateUsecase({
  repositoryGateway
})
