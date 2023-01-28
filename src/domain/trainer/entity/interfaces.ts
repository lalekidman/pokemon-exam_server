import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ITrainerBase {
  firstName: string
  lastName: string
}

export interface ITrainerEntity extends IGeneralEntityProperties, ITrainerBase {
  suspended: boolean
  suspendedAt: number // milis
}