
import {
  LeagueSlotsEntity,
  ILeagueSlotInput
} from '../entity'

import {
  ILeagueSlotUsecaseDependencies
} from './interfaces'

interface ILeagueSlotCreateUsecaseDependencies extends ILeagueSlotUsecaseDependencies {
  checkSlotLimit: (league: string, slotSize: number) => Promise<boolean>
}
export const makeLeagueSlotCreateUsecase = (
  {
    repositoryGateway,
    checkSlotLimit
  }: ILeagueSlotCreateUsecaseDependencies
) => {
  return class LeagueSlotCreateUsecase {
    constructor() {}
    
    /**
     * to create league slots
     * @param dataInput 
     * @returns 
     */
    public async execute(
      dataInput: ILeagueSlotInput,
    ) {
  
      // could add limit here?
      const leagueSlotEntity = new LeagueSlotsEntity(dataInput)
      const size = await repositoryGateway.count({
        league: leagueSlotEntity.league
      })
      const result = await checkSlotLimit(leagueSlotEntity.league, size)
      if (!result) {
        // throw error here that already reached the limit.
        throw new Error("reached the maximum slot limit.")
      }
      // else create new league slot.
      const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject())
  
      return leagueSlot
    }
  }
}
