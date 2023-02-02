import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'
import { IPokemonEntity } from '../entity'

import {
  IPokemonRepositoryGateway
} from '../repository-gateway.interfaces'

export interface IPokemonUsecaseDependencies<T = IPokemonEntity> extends IGeneralUsecaseDependencies<IPokemonRepositoryGateway<T>> {
}
