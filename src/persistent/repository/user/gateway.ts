import GeneralGatewayService from "@app/common/gateway/repository/repository-gateway.service"
import {
  IUserCollectionModel,
  UserCollectionModel
} from './schema'

import {
  IUserEntity,
  IUserRepositoryGateway
} from '@app/domain/user'

export class UserRepositoryGateway extends GeneralGatewayService<IUserCollectionModel, IUserEntity> implements IUserRepositoryGateway {
  constructor () {
    super(UserCollectionModel)
  }
}
