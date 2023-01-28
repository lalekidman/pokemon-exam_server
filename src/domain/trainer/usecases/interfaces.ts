import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'

import {
  ITrainerRepositoryGateway
} from '../repository-gateway.interfaces'

export interface ITrainerUsecaseDependencies extends IGeneralUsecaseDependencies<ITrainerRepositoryGateway> {
}
