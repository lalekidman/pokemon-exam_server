
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
    /**
     * 
     * @param id 
     * @returns 
     */
    public async getOne (
      id: string
    ) {
      return repositoryGateway.findOne({
        id
      })
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    public async getOneStrict (
      id: string
    ) {
      const pokemonStats = await this.getOne(id)
      if (!pokemonStats) {
        throw new Error("No pokemon stats data found.")
      }
      return pokemonStats
    }
  }
}
