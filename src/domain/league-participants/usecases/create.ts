
import { ILeagueSlotEntity, LEAGUE_SLOT_TYPE } from '@app/domain/league-slots'
import {
  LeagueParticipantEntity,
  ILeagueParticipantInput
} from '../entity'

import {
  ILeagueParticipantUsecaseDependencies
} from './interfaces'
interface ILeagueParticipantÇreateUsecaseDependencies extends ILeagueParticipantUsecaseDependencies {
}
export const makeLeagueParticipantCreateUsecase = (
  {
    repositoryGateway
  }: ILeagueParticipantÇreateUsecaseDependencies
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
      const leagueParticipantEntity = new LeagueParticipantEntity({
        ...dataInput,
      })
      console.log('leagueParticipantEntity :>> ', leagueParticipantEntity);
      // need to check league slot entity.
      // if the league slot type is solo or pair
      console.log('heereee :>> ', leagueSlot);
      if (leagueSlot.type === LEAGUE_SLOT_TYPE.SOLO) {
        console.log('@solo :>> ');
        // then check if the slot is already occupied.
        const occupied = await repositoryGateway.findOne({
          leagueSlot: leagueSlot.id
        })
        console.log('occupied :>> ', occupied);
        if (occupied) {
          throw new Error("the league slot is already occupied.")
        }
        // else save the data.
      } else if (leagueSlot.type === LEAGUE_SLOT_TYPE.PAIR) {
        console.log('@pair :>> ');
        const participantsCount = await repositoryGateway.count({
          leagueSlot: leagueSlot.id
        })
        if (participantsCount >= 2) {
          throw new Error("the league slot is already occupied.")
        }
        // then check if the pair participants have the same pokemon,
        const samePokemonParticipant = await repositoryGateway.findOne({
          leagueSlot: leagueSlot.id,
          pokemon: leagueParticipantEntity.pokemon, 
          trainer: leagueParticipantEntity.trainer
        })
        if (samePokemonParticipant) {
          // can't think a best error message, could enhance in the future based on the requirements.
          throw new Error("same pokemon for a pair type is not allowed.")
        }
      }
      // how could I update this?
      // seems like I need to get the pokemon stats right? and
      // hmm. need to get the pokemon stats right?
      // then I need to get the stats right?

      // should also validate the maximum stats
      // then if all of the business usecase is good or pass, then just create the participant
      const leagueParticipant = await repositoryGateway.insertOne(leagueParticipantEntity.toObject())
  
      return leagueParticipant
    }
  }
}
