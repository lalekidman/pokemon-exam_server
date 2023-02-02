import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  IPokemonEntity
} from './entity'

export interface IPokemonRepositoryGateway<T = IPokemonEntity> extends IGeneralRepositoryGateway < T > {
  // could add more here, or even in the general repository gateway to implement it globally
}
