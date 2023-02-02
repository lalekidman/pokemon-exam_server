
import {
  IPokemonStatsInput,
  PokemonStatsEntity
} from '../entity'

import {
  IPokemonStatsUsecaseDependencies
} from './interfaces'

export const makePokemonStatsCreateUsecase = (
  {
    repositoryGateway
  }: IPokemonStatsUsecaseDependencies
) => {
  return class PokemonStatsCreateUsecase {
    constructor() {}
    /**
     *
     * @param data
     */
    public async execute(
      dataInput: IPokemonStatsInput,
    ) {
  
      const pokemonStatsEntity = new PokemonStatsEntity(dataInput)

      const pokemonStats = await repositoryGateway.insertOne(pokemonStatsEntity.toObject())
  
      return pokemonStats
    }
  }
}
