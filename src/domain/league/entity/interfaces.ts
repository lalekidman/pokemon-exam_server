import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ILeagueBase {
  title: string
  location: string
  terrain: string
  requiredSlotSize: number // required number of slot.
  pokemonMaxStats: number // maximum pokemon stats for the league.
}

export interface ILeagueInput extends Pick<ILeagueBase,
| 'title'
| 'location'
| 'terrain'
| 'requiredSlotSize'
| 'pokemonMaxStats'
>{
}

export interface ILeagueEntity extends IGeneralEntityProperties, ILeagueBase {
  // what would be the date? date when it's created?
  date: Date // date

  owner: string // owner of the league, in the future, could support transfer the owner of the league.
  author: string // who created the league
}