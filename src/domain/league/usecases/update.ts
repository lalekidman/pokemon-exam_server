
import {
  ILeagueInput,
  LeagueEntity
} from '../entity'

import {
  ILeagueUsecaseDependencies
} from './interfaces'

export const makeLeagueUpdateUsecase = (
  {
    repositoryGateway
  }: ILeagueUsecaseDependencies
) => {
  return class LeagueUpdateUsecase {
    constructor() {}
    
    /**
     * to create a league
     * @param trainer id of the trainer
     * @param dataInput 
     * @returns 
     */
    public async execute(
      id: string,
      dataInput: Partial<ILeagueInput>,
    ) {
      
      const leagueEntity = new LeagueEntity(dataInput)
      const league = await repositoryGateway.updateOne({
        id
      }, {
        ...(leagueEntity.title ? {pokemonMaxStats: leagueEntity.pokemonMaxStats} : {}),
        ...(leagueEntity.location ? {location: leagueEntity.location} : {}),
        ...(leagueEntity.terrain ? {terrain: leagueEntity.terrain} : {}),
        ...(leagueEntity.pokemonMaxStats ? {pokemonMaxStats: leagueEntity.pokemonMaxStats} : {}),
        ...(leagueEntity.requiredSlotSize ? {requiredSlotSize: leagueEntity.requiredSlotSize} : {}),
      })
  
      return league
    }
  }
}
