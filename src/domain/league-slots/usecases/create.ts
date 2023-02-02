
import { ILeagueParticipantEntity, ILeagueParticipantInput } from '@app/domain/league-participants'
import { ILeagueEntity } from '@app/domain/league/entity'
import { IPokemonEntity } from '@app/domain/pokemon'
import { IPokemonStatsEntity } from '@app/domain/pokemon-stats'
import {
  LeagueSlotsEntity,
  ILeagueSlotEntity
} from '../entity'

import {
  ILeagueSlotUsecaseDependencies
} from './interfaces'

interface ILeagueSlotCreateUsecaseDependencies extends ILeagueSlotUsecaseDependencies {
  validateMaximumSlotLimit: (league: ILeagueEntity, slotSize: number) => Promise<boolean>,
  validatePokemonMaximumStats: (league: ILeagueEntity, slotOverallStats: number) => boolean,
  createLeagueParticipants: (leagueSlot: ILeagueSlotEntity, dataInput: ILeagueParticipantInput) => Promise<ILeagueParticipantEntity>,
  getPokemonDetails: (pokemon: string) => Promise<Omit<IPokemonEntity, 'pokemonStats'> & {pokemonStats: Pick<IPokemonStatsEntity, 'attack' | 'defense' | 'speed' | 'total'>}>
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
      dataInput: {
        type: string,
        participants: Omit<ILeagueParticipantInput, 'type'>[]
      },
    ) {
      const {
        participants,
        type
      } = dataInput
      // could add limit here?
      const leagueSlotEntity = new LeagueSlotsEntity({
        league: league.id,
      })
      const size = await repositoryGateway.count({
        league: leagueSlotEntity.league
      })
      console.log('size :>> ', size);
      const result = await validateMaximumSlotLimit(league, size)
      if (!result) {
        // throw error here that already reached the limit.
        throw new Error("reached the maximum slot limit.")
      }
      for (const participant of participants) {
        const pokemon = await getPokemonDetails(participant.pokemon)
        leagueSlotEntity.totalAttack += pokemon.pokemonStats.attack
        leagueSlotEntity.totalDefense += pokemon.pokemonStats.defense
        leagueSlotEntity.totalSpeed += pokemon.pokemonStats.speed
      }
      console.log('leagueSlotEntity :>> ', leagueSlotEntity);
      // validate the maximum stats allowed
      await validatePokemonMaximumStats(league, leagueSlotEntity.overallTotal)
      const leagueSlot = await repositoryGateway.insertOne(leagueSlotEntity.toObject())
      try {
      // save all of the participants.
      for (const participant of participants) {
        await createLeagueParticipants(leagueSlot, {
          type,
          pokemon: participant.pokemon,
          trainer: participant.trainer
        })
      }
        // await Promise.all(participants.map((participant) => createLeagueParticipants(leagueSlotEntity, {
        //   type,
        //   pokemon: participant.pokemon,
        //   trainer: participant.trainer
        // })))
        return leagueSlot
      } catch (error) {
        // will not work since one participants got created. unless I'll remove it too.
        repositoryGateway.removeOne({id: leagueSlot.id})
        throw error
      }
      // could enhance more here like if there's any error, revert the action.
      
    }
  }
}
