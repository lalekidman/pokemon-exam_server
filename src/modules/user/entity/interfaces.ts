import {
  IGeneralEntityProperties
} from '@common/interfaces'

export interface IUserBaseInput {
  firstName: string
  lastName: string
}

export interface IUserEntity extends IGeneralEntityProperties, IUserBaseInput {
  suspended: boolean
  suspendedAt: number // milis
}