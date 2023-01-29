
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
    public async getOne (
      id: string
    ): Promise<IPokemonEntity & {stats: IPokemonStatsEntity}> {
      const pokemon = await repositoryGateway.findOne({
        _id: id
      })
      const stats = await getPokemonStats(pokemon.pokemonStats)
      return {
        ...JSON.parse(JSON.stringify(pokemon)),
        stats
      }
    }
  }
}
