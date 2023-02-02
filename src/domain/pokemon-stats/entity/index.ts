import {v4 as uuid} from 'uuid'
import {
  makePokemonStatsEntity
} from './entity'

export const PokemonStatsEntity = makePokemonStatsEntity({
  // could use another library.
  generateId: uuid
})

export * from './interfaces'