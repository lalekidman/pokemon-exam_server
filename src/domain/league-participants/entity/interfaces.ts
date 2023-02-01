import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ILeagueParticipantBase {
  pokemon: string // id of pokemon
  trainer: string
  league: string
  leagueSlot: string
}

export interface ILeagueParticipantInput extends Pick<ILeagueParticipantBase,
| 'pokemon'
| 'trainer'
// | 'league'
// | 'leagueSlot'
>{
}

export interface ILeagueParticipantEntity extends IGeneralEntityProperties, ILeagueParticipantBase {
}