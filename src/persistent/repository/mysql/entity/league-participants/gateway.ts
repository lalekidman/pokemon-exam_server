import { TABLE_NAMES } from '@app/common/constants'
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
    super(LeagueParticipantsRepositoryEntity, TABLE_NAMES.LEAGUE_PARTICIPANT)
  }
}