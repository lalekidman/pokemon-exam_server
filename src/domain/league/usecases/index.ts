import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/trainer'

import {
  makeLeagueCreateUsecase
} from './create'

const repositoryGateway = new TrainerRepositoryGateway()

export const LeagueCreateUsecase = makeLeagueCreateUsecase({
  repositoryGateway
})
