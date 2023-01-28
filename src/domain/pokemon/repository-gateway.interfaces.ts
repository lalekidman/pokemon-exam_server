import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  IPokemonEntity
} from './entity'

export interface IPokemonRepositoryGateway extends IGeneralRepositoryGateway < IPokemonEntity > {
  // could add more here, or even in the general repository gateway to implement it globally
}
