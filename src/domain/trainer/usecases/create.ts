
import {
  ITrainerInput,
  TrainerEntity
} from '../entity'

import {
  ITrainerUsecaseDependencies
} from './interfaces'

export const makeTrainerCreateUsecase = (
  {
    repositoryGateway
  }: ITrainerUsecaseDependencies
) => {
  return class TrainerCreateUsecase {
    constructor() {}
    /**
     *
     * @param data
     */
    public async execute(
      dataInput: ITrainerInput,
    ) {
  
      const trainerEntity = new TrainerEntity(dataInput)

      const trainer = await repositoryGateway.insertOne({
        _id: trainerEntity._id,
        firstName: trainerEntity.firstName,
        lastName: trainerEntity.lastName,
        
        suspended: trainerEntity.suspended,
        suspendedAt: trainerEntity.suspendedAt,
  
        createdAt: trainerEntity.createdAt,
        updatedAt: trainerEntity.updatedAt,
      })
  
      return trainer
    }
  }
}
