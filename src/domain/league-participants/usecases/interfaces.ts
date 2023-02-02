import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'

import {
  ILeagueParticipantsEntityRepositoryGateway
} from '../repository-gateway.interfaces'

export interface ILeagueParticipantUsecaseDependencies extends IGeneralUsecaseDependencies<ILeagueParticipantsEntityRepositoryGateway> {
}
