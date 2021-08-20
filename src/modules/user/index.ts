import {v4 as uuid} from 'uuid'
import {
  UserDomain
} from './domain'
import {
  UserRepositoryGateway
} from './gateway/repository-gateway'

import {
  UserCreateService
} from './services'

export const UserEntity = UserDomain({
  generateId: uuid
})

export const userCreateService = () => (
  new UserCreateService({
    repositoryGateway: new UserRepositoryGateway()
  })
)