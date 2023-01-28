
import {
  UserEntity,
  IUserBaseInput
} from '../entity'

import { IUserUsecaseDependencies } from './interfaces'

export const makeUserCreateUsecase = (
  {
    repositoryGateway
  }: IUserUsecaseDependencies
) => {
  return class UserCreateUsecase {
    constructor() {}
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
      const user = await repositoryGateway.insertOne({
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
}
