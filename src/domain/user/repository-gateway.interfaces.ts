import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  IUserEntity
} from './entity'

// export interface IUserPaginationQuery extends IPaginationQueryParams<IUserEntity> {
// }
export interface IUserRepositoryGateway extends IGeneralRepositoryGateway < IUserEntity > {
}
