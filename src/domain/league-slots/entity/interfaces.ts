import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ILeagueSlotBase {
  league: string // id of league
  type: string // could be solo or pair

}

export interface ILeagueSlotInput extends Pick<ILeagueSlotBase,
| 'type'
>{
}

export interface ILeagueSlotEntity extends IGeneralEntityProperties, ILeagueSlotBase {
}