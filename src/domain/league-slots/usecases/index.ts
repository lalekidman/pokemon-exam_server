import {
  LeagueSlotRepositoryGateway
} from '@app/persistent/repository/mysql/entity/league-slots'

import {
  makeLeagueSlotCreateUsecase
} from './create'

import {
  makeLeagueSlotListUsecase
} from './list'
import {
  LeagueValidateUsecase
} from '@app/domain/league/usecases'

import {
  LeagueParticipantCreateUsecase
} from '@app/domain/league-participants/usecases'

import {
  PokemonViewDetailsUsecase
} from '@app/domain/pokemon/usecases'

const repositoryGateway = new LeagueSlotRepositoryGateway()

export const LeagueSlotCreateUsecase = makeLeagueSlotCreateUsecase({
  repositoryGateway,
  validateMaximumSlotLimit: new LeagueValidateUsecase().validateMaxSlot,
  validatePokemonMaximumStats: (new LeagueValidateUsecase()).validateMaxPokemonStats,
  // validatePokemonMaximumStats: (league, slotOverallStats) => (new LeagueValidateUsecase()).validateMaxPokemonStats(league, slotOverallStats),
  createLeagueParticipants: (leagueSlot, dataInput) => {
    return new LeagueParticipantCreateUsecase().execute(leagueSlot, dataInput)
  },
  getPokemonDetails: new PokemonViewDetailsUsecase().getOneStrict
  // can be do in much short way but seems complicated to read.
  // checkSlotLimit:x (new LeagueValidateUsecase()).validateMaxSlot
})
export const LeagueSlotListUsecase = makeLeagueSlotListUsecase({
  repositoryGateway
})