import {
  IAggregatePaginationResponse,
  IGeneralRepositoryGateway,
  IPaginationQueryParams
} from '../../common/repository/gateway/gateway.interfaces'

import {
  UserBase
} from '../interfaces'

export interface IUserPaginationQuery extends IPaginationQueryParams<UserBase> {
}
export interface IUserRepositoryGateway extends IGeneralRepositoryGateway < UserBase > {
  // paginationList(filterQuery: IUserPaginationQuery): Promise < IAggregatePaginationResponse < UserBase >>
}