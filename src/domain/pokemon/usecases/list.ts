
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

// interface IPokemonViewDetailsEntity extends IPokemonEntity {
//   stats: Pick<IPokemonStatsEntity, 'attack' | 'speed' | 'defense' | 'total'>
// }
interface IPokemonListOptions {
  trainerId?: string
}

export const makePokemonListUsecase = (
  {
    repositoryGateway
  }: IPokemonUsecaseDependencies
) => {
  return class PokemonListUsecase {
    constructor() {}
    /**
     * 
     * @param id 
     * @returns 
     */
    public async getList (
      options?: IPokemonListOptions
    ): Promise<IPokemonEntity[]> {

      const {
        trainerId
      } = options || {}
      return repositoryGateway.list({
        ...(trainerId ? {trainerId} : {})
      })
    }
  }
}
