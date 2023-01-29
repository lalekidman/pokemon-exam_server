
import { ILeagueSlotEntity, LEAGUE_SLOT_TYPE } from '@app/domain/league-slots'
import {
  LeagueParticipantEntity,
  ILeagueParticipantInput
} from '../entity'

import {
  ILeagueParticipantUsecaseDependencies
} from './interfaces'

export const makeLeagueParticipantCreateUsecase = (
  {
    repositoryGateway
  }: ILeagueParticipantUsecaseDependencies
) => {
  return class LeagueParticipantCreateUsecase {
    constructor() {}
    
    /**
     * to create league slots
     * @param dataInput 
     * @returns 
     */
    public async execute(
      leagueSlot: ILeagueSlotEntity,
      dataInput: ILeagueParticipantInput,
    ) {
  
      const leagueParticipantEntity = new LeagueParticipantEntity(dataInput)
      // need to check league slot entity.
      // if the league slot type is solo or pair.
      if (leagueSlot.type === LEAGUE_SLOT_TYPE.SOLO) {
        // then check if the slot is already occupied.
        const occupied = await repositoryGateway.findOne({
          leagueSlot: leagueSlot._id
        })
        if (occupied) {
          throw new Error("the league slot is already occupied.")
        }
        // else save the data.
      } else if (leagueSlot.type === LEAGUE_SLOT_TYPE.PAIR) {
        const participantsCount = await repositoryGateway.count({
          leagueSlot: leagueSlot._id
        })
        if (participantsCount >= 2) {
          throw new Error("the league slot is already occupied.")
        }
        // then check if the pair participants have the same pokemon,
        const samePokemonParticipant = await repositoryGateway.findOne({
          leagueSlot: leagueSlot._id,
          pokemon: leagueParticipantEntity.pokemon, 
          trainer: leagueParticipantEntity.trainerId
        })
        if (samePokemonParticipant) {
          // can't think a best error message, could enhance in the future based on the requirements.
          throw new Error("same pokemon for a pair type is not allowed.")
        }
      }
      // then if all of the business usecase is good or pass, then just create the participant
      const leagueParticipant = await repositoryGateway.insertOne(leagueParticipantEntity.toObject())
  
      return leagueParticipant
    }
  }
}
