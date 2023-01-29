import {
  TrainerRepositoryGateway
} from '@app/persistent/repository/trainer'

import {
  makeLeagueSlotCreateUsecase
} from './create'
import {
  LeagueValidateUsecase
} from '@app/domain/league/usecases'

const repositoryGateway = new TrainerRepositoryGateway()

export const LeagueSlotCreateUsecase = makeLeagueSlotCreateUsecase({
  repositoryGateway,
  validateMaximumSlotLimit: async (league, slotSize) => await (new LeagueValidateUsecase()).validateMaxSlot(league, slotSize)
  // ### DEVNOTE ###
  // can be do in much short way but seems complicated to read.
  // checkSlotLimit: (new LeagueValidateUsecase()).validateMaxSlot
})
