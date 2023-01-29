import {
  ILeagueUsecaseDependencies
} from './interfaces'

export const makeLeagueViewDetailsUsecase = (
  {
    repositoryGateway
  }: ILeagueUsecaseDependencies
) => {
  return class LeagueViewDetailsUsecase {
    constructor() {}
    
    /**
     * to create a league
     * @param trainer id of the trainer
     * @param dataInput 
     * @returns 
     */
    public async getOne(
      id: string
    ) {
      const league = await repositoryGateway.findOne({
        _id: id
      })
  
      return league
    }
  }
}
