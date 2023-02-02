import {
  IGeneralRepositoryGateway,
} from '@app/common/gateway/repository/repository-gateway.interfaces'

import {
  ITrainerEntity
} from './entity'

export interface ITrainerRepositoryGateway extends IGeneralRepositoryGateway < ITrainerEntity > {
  // could add more here, or even in the general repository gateway to implement it globally
}
