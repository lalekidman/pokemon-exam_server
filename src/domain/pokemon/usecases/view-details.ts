
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

interface IPokemonViewDetailsEntity extends IPokemonEntity {
  stats: Pick<IPokemonStatsEntity, 'attack' | 'speed' | 'defense' | 'total'>
}

interface IPokemonViewDetailsUsecaseDependencies extends IPokemonUsecaseDependencies {
  getPokemonStats: (id: string) => Promise<IPokemonStatsEntity> 
}

export const makePokemonViewDetailsUsecase = (
  {
    repositoryGateway,
    getPokemonStats
  }: IPokemonViewDetailsUsecaseDependencies
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
    ): Promise<IPokemonViewDetailsEntity|null> => {
      const pokemon = await repositoryGateway.findOne({
        id
      })
      if (pokemon) {
        console.log('pokemon :>> ', pokemon);
        // const pokemonStats = await getPokemonStats(pokemon.pokemonStats)
        return {
          ...JSON.parse(JSON.stringify(pokemon)),
          // stats: {
          //   attack: pokemonStats?.attack || 0,
          //   defense: pokemonStats?.defense || 0,
          //   speed: pokemonStats?.speed || 0,
          //   total: pokemonStats?.total || 0
          // }
        }
      }
      return null
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
