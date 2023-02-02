import {v4 as uuid} from 'uuid'
import {
  makeTrainerEntity
} from './entity'

export const TrainerEntity = makeTrainerEntity({
  // could use another library.
  generateId: uuid
})

export * from './interfaces'