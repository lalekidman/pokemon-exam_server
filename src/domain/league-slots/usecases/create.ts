
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

interface ILeagueSlotCreateUsecaseDependencies extends ILeagueSlotUsecaseDependencies {
  validateMaximumSlotLimit: (league: ILeagueEntity, slotSize: number) => Promise<boolean>,
  validatePokemonMaximumStats: (league: ILeagueEntity, slotOverallStats: number) => Promise<boolean>,
  createLeagueParticipants: (leagueSlot: ILeagueSlotEntity, dataInput: ILeagueParticipantInput) => Promise<ILeagueParticipantEntity>,
  getPokemonDetails: (pokemon: string) => Promise<IPokemonEntity & {stats: IPokemonStatsEntity}>
}
export const makeLeagueSlotCreateUsecase = (
  {
    repositoryGateway,
    validateMaximumSlotLimit,
    validatePokemonMaximumStats,
    createLeagueParticipants,
    getPokemonDetails
  }: ILeagueSlotCreateUsecaseDependencies
) => {
  return class LeagueSlotCreateUsecase {
    constructor() {}
    
    /**
     * to create league slots
     * @param dataInput 
     * @returns 
     */
    public async execute(
      league: ILeagueEntity,
      dataInput: ILeagueSlotInput & {
        participants: ILeagueParticipantInput[]
      },
    ) {
      const {
        participants,
        type,
      } = dataInput
      // could add limit here?
      const leagueSlotEntity = new LeagueSlotsEntity({
        league: league._id,
        type
      })
      const size = await repositoryGateway.count({
        league: leagueSlotEntity.league
      })
      const result = await validateMaximumSlotLimit(league, size)
      if (!result) {
        // throw error here that already reached the limit.
        throw new Error("reached the maximum slot limit.")
      }
      for (const participant of participants) {
        const pokemon = await getPokemonDetails(participant.pokemon)
        leagueSlotEntity.totalAttack += pokemon.stats.attack
        leagueSlotEntity.totalDefense += pokemon.stats.defense
        leagueSlotEntity.totalSpeed += pokemon.stats.speed
      }
      // validate the maximum stats allowed
      await validatePokemonMaximumStats(league, leagueSlotEntity.overallTotal)
      // save all of the participants.
      const pokemonParticipants = await Promise.all(participants.map((participant) => createLeagueParticipants(leagueSlotEntity, {
        pokemon: participant.pokemon,
        trainerId: participant.trainerId
      })))
      // then save it to the repository.
      // could enhance more here like if there's any error, revert the action.
      const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject())
  
      return leagueSlot
    }
  }
}
