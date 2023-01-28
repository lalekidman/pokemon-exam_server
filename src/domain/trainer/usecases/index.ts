import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/user'

import {
  makeTrainerCreateUsecase
} from './create'

const repositoryGateway = new TrainerRepositoryGateway()

export const TrainerCreateUsecase = makeTrainerCreateUsecase({
  repositoryGateway
})
