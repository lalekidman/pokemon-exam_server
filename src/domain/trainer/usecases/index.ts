import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/mysql/entity/trainer'

import {
  makeTrainerCreateUsecase
} from './create'
import {
  makeTrainerListUsecase
} from './list'

const repositoryGateway = new TrainerRepositoryGateway()

export const TrainerCreateUsecase = makeTrainerCreateUsecase({
  repositoryGateway
})
export const TrainerListUsecase = makeTrainerListUsecase({
  repositoryGateway
})
