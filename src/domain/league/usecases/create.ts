
import {
  ILeagueInput,
  LeagueEntity
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
     * to create a league
     * @param trainer id of the trainer
     * @param dataInput 
     * @returns 
     */
    public async execute(
      trainer: string,
      dataInput: ILeagueInput,
    ) {
  
      const leagueEntity = new LeagueEntity({
        ...dataInput,
        owner: trainer,
        author: trainer
      })

      const league = await repositoryGateway.insertOne(leagueEntity.toObject())
  
      return league
    }
  }
}
