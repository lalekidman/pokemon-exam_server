import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  ILeagueSlotEntity
} from './entity'

export interface ILeagueSlotEntityRepositoryGateway extends IGeneralRepositoryGateway < ILeagueSlotEntity > {
  // could add more here, or even in the general repository gateway to implement it globally
}
