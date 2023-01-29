import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/trainer'

import {
  makeLeagueCreateUsecase
} from './create'
import {
  makeLeagueValidateUsecase
} from './validation'

const repositoryGateway = new TrainerRepositoryGateway()

export const LeagueCreateUsecase = makeLeagueCreateUsecase({
  repositoryGateway
})

export const LeagueValidateUsecase = makeLeagueValidateUsecase({
  repositoryGateway,
})


// league slot id.
// then