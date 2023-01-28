import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ILeagueBase {
  title: string
  location: string
  terrain: string
  minSlot: number
  maxSlot: number
}

export interface ILeagueInput extends Pick<ILeagueBase,
| 'title'
| 'location'
| 'terrain'
| 'minSlot'
| 'maxSlot'
>{
}

export interface ILeagueEntity extends IGeneralEntityProperties, ILeagueBase {
  // what would be the date? date when it's created?
  date: Date // date

  owner: string // owner of the league, in the future, could support transfer the owner of the league.
  author: string // who created the league
}