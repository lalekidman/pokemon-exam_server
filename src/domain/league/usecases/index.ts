import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/trainer'

import {
  makeLeagueCreateUsecase
} from './create'
import {
  makeLeagueValidateUsecase
} from './validation'

import {
  makeLeagueViewDetailsUsecase
} from './view-details'
import {
  makeLeagueListUsecase
} from './list'

const repositoryGateway = new TrainerRepositoryGateway()

export const LeagueCreateUsecase = makeLeagueCreateUsecase({
  repositoryGateway
})

export const LeagueValidateUsecase = makeLeagueValidateUsecase({
  repositoryGateway,
})
export const LeagueViewDetailsUsecase = makeLeagueViewDetailsUsecase({
  repositoryGateway,
})
export const LeagueListUsecase = makeLeagueListUsecase({
  repositoryGateway,
})


// league slot id.
// then