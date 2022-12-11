import {
  IGeneralRepositoryGateway,
  // IPaginationQueryParams
} from '@common/gateway/repository/gateway.interfaces'

import {
  IUserEntity
} from '../entity/interfaces'

// export interface IUserPaginationQuery extends IPaginationQueryParams<IUserEntity> {
// }
export interface IUserRepositoryGateway extends IGeneralRepositoryGateway < IUserEntity > {
}
