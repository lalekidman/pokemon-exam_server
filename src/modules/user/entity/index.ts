import {v4 as uuid} from 'uuid'
import {
  makeUserEntity
} from './entity'

export const UserEntity = makeUserEntity({
  generateId: uuid
})
