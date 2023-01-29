import {
  IGeneralUsecaseDependencies,
} from '@app/common/interfaces'

import {
  ILeagueSlotEntityRepositoryGateway
} from '../repository-gateway.interfaces'

export interface ILeagueParticipantUsecaseDependencies extends IGeneralUsecaseDependencies<ILeagueSlotEntityRepositoryGateway> {
}
