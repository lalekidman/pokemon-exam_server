import {
  UserBaseInput
} from '../interfaces'
import {
  IUserRepositoryGateway
} from '../gateway/interfaces'

import {
  IGeneralServiceDependencies,
} from '../../common/interfaces'

import {
  UserEntity
} from '../index'

interface IServiceDependencies extends IGeneralServiceDependencies<IUserRepositoryGateway> {
}
export class UserCreateService {
  constructor(private readonly deps: IServiceDependencies) {}
  /**
   *
   * @param data
   * @param authorId user who did the request.
   */
  public async execute(
    data: UserBaseInput,
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
