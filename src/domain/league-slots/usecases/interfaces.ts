import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'

import {
  ILeagueRepositoryGateway
} from '../repository-gateway.interfaces'

export interface ILeagueUsecaseDependencies extends IGeneralUsecaseDependencies<ILeagueRepositoryGateway> {
}
