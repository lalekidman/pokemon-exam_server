import { ILeagueEntity } from '../entity'
import {
  ILeagueUsecaseDependencies
} from './interfaces'

export const makeLeagueValidateUsecase = (
  {
    repositoryGateway
  }: ILeagueUsecaseDependencies
) => {
  return class LeagueValidateUsecase {
    constructor() {}
    
    /**
     * 
     * @param id 
     * @param slotSize size to validate
     * @returns 
     */
    public async validateMaxSlot(
      league: ILeagueEntity,
      slotSize: number
    ): Promise<boolean> {
      if (league) {
        if (league.requiredSlotSize < slotSize) {
          throw new Error("Unable to add slot, reached the maximum required slot.")
        }
      }
      return true
    }
    /**
     * 
     * @param id 
     * @param maxStats overall stats to validate
     * @returns 
     */
    public async validateMaxPokemonStats(
      league: ILeagueEntity,
      maxStats: number
    ): Promise<boolean> {
      if (league) {
        if (league.pokemonMaxStats < maxStats) {
          throw new Error("Unable to add slot, reached the maximum stats allowed.")
        }
      }
      return true
    }
  }
}
