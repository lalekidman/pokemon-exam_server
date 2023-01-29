import {
  ILeagueUsecaseDependencies
} from './interfaces'

interface IListOptions {
  trainer?: string
}
export const makeLeagueListUsecase = (
  {
    repositoryGateway
  }: ILeagueUsecaseDependencies
) => {
  return class LeagueListUsecase {
    constructor() {}
    
    /**
     * 
     * @param options 
     * @returns 
     */
    public async getList (
      options?: IListOptions
    ) {
      const {
        trainer = ''
      } = options || {}

      const league = await repositoryGateway.list({
        ...(trainer ? {owner: trainer} : {})
      })

      return league
    }
  }
}
