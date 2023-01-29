
import {
  IPokemonStatsInput,
  PokemonStatsEntity
} from '../entity'

import {
  IPokemonStatsUsecaseDependencies
} from './interfaces'

export const makePokemonStatsViewDetailsUsecase = (
  {
    repositoryGateway
  }: IPokemonStatsUsecaseDependencies
) => {
  return class PokemonStatsViewDetailsUsecase {
    constructor() {}
    /***
     * 
     */
    public async getOne (
      id: string
    ) {
      return repositoryGateway.findOne({
        _id: id
      })
    }
  }
}
