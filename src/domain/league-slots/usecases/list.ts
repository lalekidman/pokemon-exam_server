
import { ILeagueParticipantEntity, ILeagueParticipantInput } from '@app/domain/league-participants'
import { ILeagueEntity } from '@app/domain/league/entity'
import { IPokemonEntity } from '@app/domain/pokemon'
import { IPokemonStatsEntity } from '@app/domain/pokemon-stats'
import {
  LeagueSlotsEntity,
  ILeagueSlotInput,
  ILeagueSlotEntity
} from '../entity'

import {
  ILeagueSlotUsecaseDependencies
} from './interfaces'

export const makeLeagueSlotListUsecase = (
  {
    repositoryGateway
  }: ILeagueSlotUsecaseDependencies
) => {
  return class LeagueSlotListUsecase {
    constructor() {}
    
    /**
     * to List league slots
     * @param dataInput 
     * @returns 
     */
    public async getList(
      league: string,
    ) {
      return repositoryGateway.list({
        league
      })
    }
  }
}
