import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ILeagueSlotBase {
  league: string // id of league
  // league and trainer?
  // then pokemons?
  type: string // could be solo or pair

  totalAttack: number;
  totalDefense: number;
  totalSpeed: number;
  overallTotal: number;
}

export interface ILeagueSlotInput extends Pick<ILeagueSlotBase,
| 'type'
>{
}

export interface ILeagueSlotEntity extends IGeneralEntityProperties, ILeagueSlotBase {
}