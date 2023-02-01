
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
  trainer?: string
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
        trainer
      } = options || {}
      return repositoryGateway.list({
        ...(trainer ? {trainer: trainer} : {})
        // ...(trainer ? {trainerId: trainer} : {}) as any
      })
    }
  }
}
