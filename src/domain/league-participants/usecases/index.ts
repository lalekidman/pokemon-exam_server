import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/trainer'

import {
  makeLeagueParticipantCreateUsecase
} from './create'

const repositoryGateway = new TrainerRepositoryGateway()

export const LeagueParticipantCreateUsecase = makeLeagueParticipantCreateUsecase({
  repositoryGateway
})


// league slot id.
// then