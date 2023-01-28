import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'

import {
  IPokemonStatsRepositoryGateway
} from '../repository-gateway.interfaces'

export interface IPokemonStatsUsecaseDependencies extends IGeneralUsecaseDependencies<  IPokemonStatsRepositoryGateway
> {
}
