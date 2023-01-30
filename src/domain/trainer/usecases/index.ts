import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/mysql/entity/trainer'

import {
  makeTrainerCreateUsecase
} from './create'

const repositoryGateway = new TrainerRepositoryGateway()

export const TrainerCreateUsecase = makeTrainerCreateUsecase({
  repositoryGateway
})
