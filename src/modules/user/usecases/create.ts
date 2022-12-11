import {
  IGeneralUsecaseDependencies,
} from '@common/interfaces'

import {
  IUserBaseInput
} from '../entity/interfaces'
import {
  IUserRepositoryGateway
} from '../gateway/interfaces'


import {
  UserEntity
} from '../entity'
// modules or services?
interface IUsecaseDependencies extends IGeneralUsecaseDependencies<IUserRepositoryGateway> {
}
export class UserCreateUsecase {
  constructor(private readonly deps: IUsecaseDependencies) {}
  /**
   *
   * @param data
   * @param authorId user who did the request.
   */
  public async execute(
    data: IUserBaseInput,
    // authorId: string
  ) {

    const userEntity = new UserEntity(data)
    const user = await this.deps.repositoryGateway.insertOne({
      _id: userEntity._id,
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      
      suspended: userEntity.suspended,
      suspendedAt: userEntity.suspendedAt,

      createdAt: userEntity.createdAt,
      updatedAt: userEntity.updatedAt,
    })

    return user
  }
}
