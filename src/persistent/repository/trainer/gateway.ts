import GeneralGatewayService from "@app/common/gateway/repository/services/mongodb"
import {
  ITrainerCollectionModel,
  TrainerCollectionModel
} from './schema'

import {
  ITrainerEntity,
  ITrainerRepositoryGateway
} from '@app/domain/trainer'

export class TrainerRepositoryGateway extends GeneralGatewayService<ITrainerCollectionModel, ITrainerEntity> implements ITrainerRepositoryGateway {
  constructor () {
    super(TrainerCollectionModel)
  }
}
