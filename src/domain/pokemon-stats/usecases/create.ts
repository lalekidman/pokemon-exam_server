
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
  
      const pokemonEntity = new PokemonStatsEntity(dataInput)

      const pokemon = await repositoryGateway.insertOne(pokemonEntity.toObject())
  
      return pokemon
    }
  }
}
