import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  IPokemonStatsEntity
} from './entity'

export interface IPokemonStatsRepositoryGateway extends IGeneralRepositoryGateway < IPokemonStatsEntity > {
  // could add more here, or even in the general repository gateway to implement it globally
}
