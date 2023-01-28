import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/trainer'

import {
  makeTrainerCreateUsecase
} from './create'

const repositoryGateway = new TrainerRepositoryGateway()

export const TrainerCreateUsecase = makeTrainerCreateUsecase({
  repositoryGateway
})
