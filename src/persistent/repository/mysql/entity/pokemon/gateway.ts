import { TABLE_NAMES } from '@app/common/constants'
import {
  MySQLRepositoryGatewayService
} from '@app/common/gateway/repository/services/mysql'
import {
  IPokemonRepositoryGateway
} from '@app/domain/pokemon/repository-gateway.interfaces'
import {
  PokemonRepositoryEntity
} from './entity'

export class PokemonRepositoryGateway extends MySQLRepositoryGatewayService<PokemonRepositoryEntity> implements IPokemonRepositoryGateway  {
  constructor () {
    super(PokemonRepositoryEntity, TABLE_NAMES.POKEMON)
  }
}