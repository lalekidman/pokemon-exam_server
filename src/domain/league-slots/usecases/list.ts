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
