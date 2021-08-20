import {
  IGeneralEntityProperties
} from '../common/interfaces'

export interface UserBaseInput {
  firstName: string
  lastName: string
}

export interface UserBase extends IGeneralEntityProperties, UserBaseInput {
  suspended: boolean
  suspendedAt: number // milis
}