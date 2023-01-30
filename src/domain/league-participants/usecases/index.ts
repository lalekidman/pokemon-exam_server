import {
  LeagueParticipantsRepositoryGateway
} from '@app/persistent/repository/mysql/entity/league-participants'

import {
  makeLeagueParticipantCreateUsecase
} from './create'

const repositoryGateway = new LeagueParticipantsRepositoryGateway()

export const LeagueParticipantCreateUsecase = makeLeagueParticipantCreateUsecase({
  repositoryGateway,
})


// league slot id.
// then