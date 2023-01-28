
import {
  IPokemonInput,
  PokemonEntity
} from '../entity'

import {
  IPokemonUsecaseDependencies
} from './interfaces'
import {
  IPokemonStatsInput
} from '@app/domain/pokemon-stats/entity/interfaces'


interface IPokemonCreateUsecaseDependencies extends IPokemonUsecaseDependencies {
  createPokemonStats: (data: IPokemonStatsInput) => Promise<string>
}

export const makePokemonCreateUsecase = (
  {
    repositoryGateway,
    createPokemonStats
  }: IPokemonCreateUsecaseDependencies
) => {
  return class PokemonCreateUsecase {
    constructor() {}
    /**
     *
     * @param data
     */
    public async execute(
      dataInput: IPokemonInput & {
        stats: IPokemonStatsInput
      },
    ) {
  
      const pokemonEntity = new PokemonEntity(dataInput)

      pokemonEntity.pokemonStats = await createPokemonStats(dataInput.stats)

      const pokemon = await repositoryGateway.insertOne(pokemonEntity.toObject())
  
      return pokemon
    }
  }
}
