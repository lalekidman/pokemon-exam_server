import {
  UserRepositoryGateway
} from './gateway/repository-gateway'

import {
  UserCreateUsecase
} from './usecases'

export const userCreateService = () => (
  new UserCreateService({
    repositoryGateway: new UserRepositoryGateway()
  })
)