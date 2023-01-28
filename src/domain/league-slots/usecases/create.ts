
import {
  LeagueSlotsEntity,
  ILeagueSlotInput
} from '../entity'

import {
  ILeagueUsecaseDependencies
} from './interfaces'

export const makeLeagueCreateUsecase = (
  {
    repositoryGateway
  }: ILeagueUsecaseDependencies
) => {
  return class LeagueCreateUsecase {
    constructor() {}
    
    /**
     * to create league slots
     * @param dataInput 
     * @returns 
     */
    public async execute(
      dataInput: ILeagueSlotInput,
    ) {
  
      const leagueSlotEntity = new LeagueSlotsEntity(dataInput)

      const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject())
  
      return leagueSlot
    }
  }
}
