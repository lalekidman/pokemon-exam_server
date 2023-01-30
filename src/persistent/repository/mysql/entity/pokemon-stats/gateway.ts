import {
  MySQLRepositoryGatewayService
} from '@app/common/gateway/repository/services/mysql'
import {
  IPokemonStatsRepositoryGateway
} from '@app/domain/pokemon-stats/repository-gateway.interfaces'
import {
  PokemonStatsRepositoryEntity
} from './entity'

export class PokemonStatsRepositoryGateway extends MySQLRepositoryGatewayService<PokemonStatsRepositoryEntity> implements IPokemonStatsRepositoryGateway  {
  constructor () {
    super(PokemonStatsRepositoryEntity)
  }
}