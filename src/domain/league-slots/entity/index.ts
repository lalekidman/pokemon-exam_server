import {v4 as uuid} from 'uuid'
import {
  makeLeagueSlotsEntity
} from './entity'

export const LeagueSlotsEntity = makeLeagueSlotsEntity({
  // could use another library.
  generateId: uuid
})

export * from './interfaces'