import {v4 as uuid} from 'uuid'
import {
  makeLeagueEntity
} from './entity'

export const LeagueEntity = makeLeagueEntity({
  // could use another library.
  generateId: uuid
})

export * from './interfaces'