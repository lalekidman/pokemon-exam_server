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
      id: string,
      slotSize: number
    ): Promise<boolean> {
      const league = await repositoryGateway.findOne({
        _id: id
      })
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
     * @param slotSize size to validate
     * @returns 
     */
    public async validateMaxPokemonStats(
      id: string,
      maxStats: number
    ): Promise<boolean> {
      const league = await repositoryGateway.findOne({
        _id: id
      })
      if (league) {
        if (league.pokemonMaxStats < maxStats) {
          throw new Error("Unable to add slot, reached the maximum stats allowed.")
        }
      }
      return true
    }
  }
}
