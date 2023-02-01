import {
  LeagueRepositoryGateway
} from '@app/persistent/repository/mysql/entity/league'

import {
  makeLeagueCreateUsecase
} from './create'
import {
  makeLeagueUpdateUsecase
} from './update'
import {
  makeLeagueValidateUsecase
} from './validation'

import {
  makeLeagueViewDetailsUsecase
} from './view-details'
import {
  makeLeagueListUsecase
} from './list'

const repositoryGateway = new LeagueRepositoryGateway()

export const LeagueCreateUsecase = makeLeagueCreateUsecase({
  repositoryGateway
})
export const LeagueUpdateUsecase = makeLeagueUpdateUsecase({
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