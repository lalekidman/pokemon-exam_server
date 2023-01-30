import {
  MySQLRepositoryGatewayService
} from '@app/common/gateway/repository/services/mysql'
import {
  ILeagueSlotEntityRepositoryGateway
} from '@app/domain/league-slots/repository-gateway.interfaces'

import {
  LeagueSlotRepositoryEntity
} from './entity'

export class LeagueSlotRepositoryGateway extends MySQLRepositoryGatewayService<LeagueSlotRepositoryEntity> implements ILeagueSlotEntityRepositoryGateway  {
  constructor () {
    super(LeagueSlotRepositoryEntity)
  }
}