
import {
  IPokemonInput,
  PokemonEntity,
  IPokemonEntity
} from '../entity'

import {
  IPokemonUsecaseDependencies
} from './interfaces'
import {
  IPokemonStatsEntity,
  IPokemonStatsInput
} from '@app/domain/pokemon-stats/entity/interfaces'

export interface IPokemonViewDetailsEntity extends Omit<IPokemonEntity, 'pokemonStats'> {
  pokemonStats: Pick<IPokemonStatsEntity, 'attack' | 'speed' | 'defense' | 'total'>
}

export const makePokemonViewDetailsUsecase = (
  {
    repositoryGateway,
    // getPokemonStats
  }: IPokemonUsecaseDependencies<IPokemonEntity>
) => {
  return class PokemonViewDetailsUsecase {
    constructor() {}
    /**
     * 
     * @param id 
     * @returns 
     */
    public getOne = async (
      id: string
    ) => {
      const pokemon = (await repositoryGateway.findOne({
        id
      })) as IPokemonViewDetailsEntity|null
      if (pokemon) {
        pokemon.pokemonStats = {
          attack: pokemon.pokemonStats.attack,
          speed: pokemon.pokemonStats.speed,
          defense: pokemon.pokemonStats.defense,
          total: pokemon.pokemonStats.total,
        }
      }
      return pokemon
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    public getOneStrict = async (
      id: string
    ): Promise<IPokemonViewDetailsEntity> => {
      const pokemon = await this.getOne(id)
      console.log('pokemon :>> ', pokemon);
      if (!pokemon) {
        throw new Error("No pokemon details found.")
      }
      return pokemon
    }
  }
}
