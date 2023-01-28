import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'

import {
  IPokemonRepositoryGateway
} from '../repository-gateway.interfaces'

export interface IPokemonUsecaseDependencies extends IGeneralUsecaseDependencies<IPokemonRepositoryGateway> {
}
