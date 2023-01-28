
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
     *
     * @param data
     */
    public async execute(
      trainerId: string,
      dataInput: ILeagueInput,
    ) {
  
      const trainerEntity = new LeagueEntity({
        ...dataInput,
        ownerId: trainerId,
        authorId: trainerId
      })

      const trainer = await repositoryGateway.insertOne(trainerEntity.toObject())
  
      return trainer
    }
  }
}
