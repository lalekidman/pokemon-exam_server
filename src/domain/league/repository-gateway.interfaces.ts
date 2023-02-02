import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  ILeagueEntity
} from './entity'

export interface ILeagueRepositoryGateway extends IGeneralRepositoryGateway < ILeagueEntity > {
  // could add more here, or even in the general repository gateway to implement it globally
}
