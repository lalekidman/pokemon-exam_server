import {
  UserRepositoryGateway
} from './gateway/repository-gateway'

import {
  UserCreateUsecase
} from './usecases'

export const userCreateUsecase = () => (
  new UserCreateUsecase({
    repositoryGateway: new UserRepositoryGateway()
  })
)