import GeneralGatewayService from "@app/common/gateway/repository/gateway.service";
import {
  IUserCollectionModel,
  UserCollectionModel
} from './schema'
import {
  IUserRepositoryGateway
} from './interfaces'

import {
  IUserEntity
} from '../entity/interfaces'
// import { IAggregatePaginationResponse } from "../../common/repository/gateway/gateway.interfaces";

export class UserRepositoryGateway extends GeneralGatewayService<IUserCollectionModel, IUserEntity> implements IUserRepositoryGateway {
  constructor () {
    super(UserCollectionModel)
  }
}
