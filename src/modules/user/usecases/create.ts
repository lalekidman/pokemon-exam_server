
import {
  UserEntity,
  IUserBaseInput
} from '../entity'

import { IUserUsecaseDependencies } from './interfaces'

export class UserCreateUsecase {
  constructor(private readonly deps: IUserUsecaseDependencies) {}
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
