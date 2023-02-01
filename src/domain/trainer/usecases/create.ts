
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
      // trainerEntity.firstName = dataInput.firstName
      const trainer = await repositoryGateway.insertOne(trainerEntity.toObject())
  
      return trainer
    }
  }
}
