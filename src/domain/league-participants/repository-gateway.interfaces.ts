import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  ILeagueParticipantEntity
} from './entity'

export interface ILeagueParticipantsEntityRepositoryGateway extends IGeneralRepositoryGateway < ILeagueParticipantEntity > {
  // could add more here, or even in the general repository gateway to implement it globally
}
