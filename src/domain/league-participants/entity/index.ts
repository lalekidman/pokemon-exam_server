import {v4 as uuid} from 'uuid'
import {
  makeLeagueParticipantEntity
} from './entity'

export const LeagueParticipantEntity = makeLeagueParticipantEntity({
  // could use another library.
  generateId: uuid
})

export * from './interfaces'