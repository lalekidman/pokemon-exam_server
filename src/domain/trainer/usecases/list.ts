
import {
  ITrainerInput,
  TrainerEntity
} from '../entity'

import {
  ITrainerUsecaseDependencies
} from './interfaces'

export const makeTrainerListUsecase = (
  {
    repositoryGateway
  }: ITrainerUsecaseDependencies
) => {
  return class TrainerListUsecase {
    constructor() {}
    /**
     *
     * @param data
     */
    public async getList(
      // dataInput: ITrainerInput,
    ) {
      return repositoryGateway.list()
    }
  }
}
