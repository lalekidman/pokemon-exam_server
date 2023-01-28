
import {
  IPokemonInput,
  PokemonEntity
} from '../entity'

import {
  IPokemonUsecaseDependencies
} from './interfaces'

export const makePokemonCreateUsecase = (
  {
    repositoryGateway
  }: IPokemonUsecaseDependencies
) => {
  return class PokemonCreateUsecase {
    constructor() {}
    /**
     *
     * @param data
     */
    public async execute(
      dataInput: IPokemonInput,
    ) {
  
      const pokemonEntity = new PokemonEntity(dataInput)

      const pokemon = await repositoryGateway.insertOne({
        _id: pokemonEntity._id,
        name: pokemonEntity.name,
        type: pokemonEntity.type,
        
        createdAt: pokemonEntity.createdAt,
        updatedAt: pokemonEntity.updatedAt,
      })
  
      return pokemon
    }
  }
}
