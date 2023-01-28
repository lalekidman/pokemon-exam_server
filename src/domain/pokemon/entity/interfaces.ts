import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface IPokemonBase {
  name: string
  type: string // what should be the type? can be enum variables to define it more clearly?
}

export interface IPokemonInput extends Pick<IPokemonBase,
| 'name'
| 'type'
>{
}

export interface IPokemonEntity extends IGeneralEntityProperties, IPokemonBase {
}