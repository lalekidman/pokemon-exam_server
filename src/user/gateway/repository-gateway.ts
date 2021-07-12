import GeneralGatewayService from "../../common/gateway/repository/gateway.service";
import {
  IUserCollectionModel,
  UserCollectionModel
} from './schema'
import {
  IUserRepositoryGateway
} from './interfaces'

import {
  UserBase,
} from '../interfaces'
// import { IAggregatePaginationResponse } from "../../common/repository/gateway/gateway.interfaces";

export class UserRepositoryGateway extends GeneralGatewayService<IUserCollectionModel, UserBase> implements IUserRepositoryGateway {
  constructor () {
    super(UserCollectionModel)
  }

  // /**
  //  * 
  //  * @param filterQuery 
  //  */
  // paginationList(filterQuery: IIndustryPaginationQuery): Promise<IAggregatePaginationResponse<IndustryBase>> {
  //   return this.aggregateWithPagination([
  //     {
  //       $match: {}
  //     },
  //   ]
  //   ,filterQuery)
  // }
}