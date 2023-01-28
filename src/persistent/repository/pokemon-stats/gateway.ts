import GeneralGatewayService from "@app/common/gateway/repository/services/mongodb"
import {
  IPokemonStatsCollectionModel,
  PokemonStatsCollectionModel
} from './schema'

import {
  IPokemonStatsEntity,
  IPokemonStatsRepositoryGateway
} from '@app/domain/pokemon-stats'

export class PokemonStatsRepositoryGateway extends GeneralGatewayService<IPokemonStatsCollectionModel, IPokemonStatsEntity> implements IPokemonStatsRepositoryGateway {
  constructor () {
    super(PokemonStatsCollectionModel)
  }
}
