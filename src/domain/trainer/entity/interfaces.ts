import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ITrainerBase {
  firstName: string
  lastName: string
}

export interface ITrainerInput extends Pick<ITrainerBase,
| 'firstName'
| 'lastName'
>{
}

export interface ITrainerEntity extends IGeneralEntityProperties, ITrainerBase {
  suspended: boolean
  suspendedAt: number // milis
}