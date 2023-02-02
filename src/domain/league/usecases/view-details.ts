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
     * get league object
     * @param id 
     * @returns 
     */
    public async getOne(
      id: string
    ) {
      const league = await repositoryGateway.findOne({
        id
      })
      return league
    }
    
    /**
     * get league object
     * throw error if no data found.
     * @param id 
     * @returns 
     */
    public async getOneStrict (
      id: string
    ) {
      const league = await this.getOne(id)
      if (!league) {
        throw new Error("No league data found.")
      }
      return league
    }
  }
}
