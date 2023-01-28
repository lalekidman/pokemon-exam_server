import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface IPokemonStatsBase {
  attack: number
  defense: number
  speed: number
  total: number // total stats
}

export interface IPokemonStatsInput extends Pick<IPokemonStatsBase,
| 'attack'
| 'defense'
| 'speed'
>{
}

export interface IPokemonStatsEntity extends IGeneralEntityProperties, IPokemonStatsBase {
}