import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'

import {
  IUserRepositoryGateway
} from '../repository-gateway.interfaces'

export interface IUserUsecaseDependencies extends IGeneralUsecaseDependencies<IUserRepositoryGateway> {
}
