import {
  IGeneralEntityProperties
} from '@app/common/interfaces'

export interface ILeagueParticipantBase {
  type: string
  pokemon: string // id of pokemon
  trainer: string
  league: string
  leagueSlot: string
}

export interface ILeagueParticipantInput extends Pick<ILeagueParticipantBase,
| 'pokemon'
| 'trainer'
| 'type'
>{
}

export interface ILeagueParticipantEntity extends IGeneralEntityProperties, ILeagueParticipantBase {
}