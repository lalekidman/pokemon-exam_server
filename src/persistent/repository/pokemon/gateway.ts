import GeneralGatewayService from "@app/common/gateway/repository/services/mongodb"
import {
  IPokemonCollectionModel,
  PokemonCollectionModel
} from './schema'

import {
  IPokemonEntity,
  IPokemonRepositoryGateway
} from '@app/domain/pokemon'

export class PokemonRepositoryGateway extends GeneralGatewayService<IPokemonCollectionModel, IPokemonEntity> implements IPokemonRepositoryGateway {
  constructor () {
    super(PokemonCollectionModel)
  }
}
