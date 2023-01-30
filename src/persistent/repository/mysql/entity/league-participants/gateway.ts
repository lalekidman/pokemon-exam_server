import {
  MySQLRepositoryGatewayService
} from '@app/common/gateway/repository/services/mysql'
import {
  ILeagueParticipantsEntityRepositoryGateway
} from '@app/domain/league-participants/repository-gateway.interfaces'

import {
  LeagueParticipantsRepositoryEntity
} from './entity'

export class LeagueParticipantsRepositoryGateway extends MySQLRepositoryGatewayService<LeagueParticipantsRepositoryEntity> implements ILeagueParticipantsEntityRepositoryGateway  {
  constructor () {
    super(LeagueParticipantsRepositoryEntity)
  }
}